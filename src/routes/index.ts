import express from 'express'
import appAPI from './api'
import appLogin from './template'

const app = express()

app.use(express.json())

app.use('/', appAPI) // Just for example
app.use('/', appLogin) // Just for example

export default app
