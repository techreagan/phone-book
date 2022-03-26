import express from 'express'
import PhoneBookController from './phonebooks.controller'

const { findAll, findOne, findByPhoneNumber, create, remove } =
	PhoneBookController

const router = express.Router()

router.route('/').get(findAll).post(create)

router.route('/:id').get(findOne).delete(remove)

router.get('/:phoneNumber/phone-number', findByPhoneNumber)

export default router
