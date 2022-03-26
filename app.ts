import express, { Request, Response, NextFunction, Errback } from 'express'

const app = express()

app.use(express.json())

import routes from './routes'

routes(app)

app.use((error: Errback, req: Request, res: Response, next: NextFunction) => {
	res.status(400).json({ success: false, error: error })
})

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
	console.log(`We are live, port ${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: { message: string }): void => {
	console.log(`Error: ${err.message}`)
	// Close server & exit process
	server.close(() => process.exit(1))
})
