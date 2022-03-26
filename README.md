# Phone Book

## Features

> CRD (Create, Read And Delete)

- Store unique phone numbers
- List phone numbers in phone books
- Get single contact by phone number
- Get single contact by id
- Delete contact by id

## Details

The main logic for this challenge is in the components/phonebooks.service.ts file, you could create an instance and test all methods, but I decided to create endpoints to test it. example below

```javascript
const phoneBookService: PhoneBookService = PhoneBookService.getInstance()

// Add phonenumber
phoneBookService.create({
	phoneNumber: '23400000',
	name: 'Tech Reagan',
	email: 'test@test.com',
})

// Get unique phonenumber
phoneBookService.findByPhoneNumber('+23400000')
```

## API Documentation

Extensive and testing documentation with postman: [Phone book API](https://documenter.getpostman.com/view/9407876/UVyn2Js4)

## Installation

Install all npm dependecies

```console
npm install
```

## Start web server

```console
node run dev
```
