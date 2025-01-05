import express, { Router } from 'express'
import { loginValidator } from '~/middlewares/users.middleware'
import UserController from '~/controllers/users.controllder'

const appAuths = express()
const authRouter = Router()

authRouter.post('/login', loginValidator, UserController.login)

appAuths.use('/auths', authRouter)

export default appAuths
