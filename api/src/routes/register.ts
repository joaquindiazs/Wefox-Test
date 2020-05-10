import { Router } from 'express'

const router = Router()

router.post('/register', (req, res) => {
	console.log(req.body)
	res.json({ message: 'Ok register' })
})

export default router