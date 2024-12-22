import express, { Router } from 'express'

const appLogin = express()
const loginRouter = Router()

loginRouter.get('/forgot-password', (req, res) => {
    res.json({
        'login': 'Forgot password'
    })
})

appLogin.use('/login', loginRouter)

export default appLogin