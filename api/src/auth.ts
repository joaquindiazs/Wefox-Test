import { Request } from 'express'

export const logIn = (req: Request, userId: sting) => {
	req.session!.userId = userId
}