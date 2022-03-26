import { CreatePhoneBookDTO } from './dto/create-phonebook.dto'
import { PhoneBook } from './entities/phonebook.entity'

export class PhoneBookService {
	private static instance: PhoneBookService

	private phoneBooks: PhoneBook[] = [
		{
			id: 1,
			phoneNumber: '33333333',
			name: 'Buddy Brew',
			email: 'test@test.com',
			createdAt: new Date(),
		},
	]

	static getInstance() {
		if (this.instance) {
			return this.instance
		}
		this.instance = new PhoneBookService()
		return this.instance
	}

	findAll() {
		return this.phoneBooks
	}

	findOne(id: string) {
		return this.phoneBooks.find((item) => item.id === +id)
	}

	findByPhoneNumber(phoneNumber: string) {
		const phoneBook = this.phoneBooks.find(
			(item) => item.phoneNumber === phoneNumber
		)
		if (!phoneBook) {
			return `Phone number ${phoneNumber} not found`
		}

		return phoneBook
	}

	create(createContact: CreatePhoneBookDTO) {
		createContact.id = Math.random()
		createContact.createdAt = new Date()

		if (typeof this.findByPhoneNumber(createContact.phoneNumber) === 'object') {
			return 'Phone number already exist'
		}

		this.phoneBooks.push(createContact)
		return createContact
	}

	remove(id: string) {
		const phoneBookIndex = this.phoneBooks.findIndex((item) => item.id === +id)
		if (phoneBookIndex >= 0) {
			this.phoneBooks.splice(phoneBookIndex, 1)
		}
	}
}
