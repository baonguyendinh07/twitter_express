import { Request, Response } from 'express';

export default class UserController {
    static login(req: Request, res: Response) {
        const { username, password } = req.body

        if (username === 'admin' && password === '123456') {
            return res.json({
                message: 'Login success'
            })
        }

        return res.status(400).json({
            message: 'Login failed'
        })
    }
}