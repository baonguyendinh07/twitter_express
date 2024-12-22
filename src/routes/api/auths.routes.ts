import express, { Router } from 'express'

const appAuths = express()
const authRouter = Router()

authRouter.get('/test', (req, res) => {
    res.json({
        'hello': 'Hello World - Test'
    })
})

appAuths.use('/auths', authRouter)

export default appAuths