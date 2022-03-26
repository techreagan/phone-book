import { Request, Response } from 'express'
import { CreatePhoneBookDTO } from './dto/create-phonebook.dto'
import { PhoneBookService } from './phonebooks.service'
PhoneBookService

export default class PhoneBookController {
	private static phoneBookService: PhoneBookService =
		PhoneBookService.getInstance()

	// @desc    Find all phone book details
	// @route   GET /api/v1/phonebook
	// @access  Public
	static findAll(_: Request, res: Response) {
		res.status(200).json({
			success: true,
			data: PhoneBookController.phoneBookService.findAll(),
		})
	}

	// @desc    Find one contact details
	// @route   GET /api/v1/phonebook/:id
	// @access  Public
	static findOne(req: Request, res: Response) {
		const phoneBook = PhoneBookController.phoneBookService.findOne(
			req.params.id
		)
		if (!phoneBook) {
			return res.status(400).json({
				success: false,
				error: `Phone details #${req.params.id} not found`,
			})
		}

		res.status(200).json({ success: true, data: phoneBook })
	}

	// @desc    Find one contact details
	// @route   GET /api/v1/phonebook/:phoneNumber
	// @access  Public
	static findByPhoneNumber(req: Request, res: Response) {
		const phoneBook = PhoneBookController.phoneBookService.findByPhoneNumber(
			req.params.phoneNumber
		)

		if (!phoneBook) {
			return res.status(400).json({
				success: false,
				error: `Phone number # ${req.params.phoneNumber} not found`,
			})
		}

		res.status(200).json({ success: true, data: phoneBook })
	}

	// @desc    Create contact
	// @route   POST /api/v1/phonebook
	// @access  Public
	static create(req: Request, res: Response) {
		const createPhoneBook: CreatePhoneBookDTO = req.body

		const data = PhoneBookController.phoneBookService.create(createPhoneBook)

		if (typeof data === 'string') {
			return res.status(400).json({ success: false, error: data })
		}
		res.status(201).json({ success: true, data: data })
	}

	// @desc    Find all phone book details
	// @route   DELETE /api/v1/phonebook/:id
	// @access  Public
	static remove(req: Request, res: Response) {
		PhoneBookController.phoneBookService.remove(req.params.id)

		res.status(200).json({ success: true, data: {} })
	}
}
