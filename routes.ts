import phoneBookRoute from './components/phonebooks/phonebooks.routes'

export default (app: any) => {
	app.use('/phone-books', phoneBookRoute)
}
