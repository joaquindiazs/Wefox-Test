import { Router } from 'express'
import { registerSchema } from '../validation'
import { User } from '../models'
import { logIn } from '../auth'

const router = Router()

router.post('/register', async (req, res) => {
	await registerSchema.validateAsync(req.body, { abortEarly: false })
	
	const { email, name, password } = req.body

	const found = await User.exists({ email })

	if (found) {
		throw new Error('Email is already taken');
	}

	const user = await User.create({
		email, name, password
	})

	logIn(req, user.id) //TODO: check logIn method set in cache Set-Cookie: sid
	

	res.json({ message: 'Ok register' })
})

export default router