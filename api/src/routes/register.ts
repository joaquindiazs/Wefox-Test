import { Router } from 'express'
import { guest, catchAsync } from '../middleware'
import { validate, registerSchema } from '../validation'
import { User } from '../models'
import { logIn } from '../auth'
import { BadRequest } from '../errors'

const router = Router()

router.post('/register', guest, catchAsync(async (req, res) => {
	await validate(registerSchema, req.body)
	
	const { email, name, password } = req.body

	const found = await User.exists({ email })

	if (found) {
		throw new BadRequest('Email is already taken');
	}

	const user = await User.create({
		email, name, password
	})

	logIn(req, user.id) //TODO: check logIn method set in cache Set-Cookie: sid
	

	res.json({ message: 'Ok register' })
}))

export default router