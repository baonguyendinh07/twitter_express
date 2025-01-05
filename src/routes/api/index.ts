import appAuths from './auths.routes'
import express from 'express'

const appAPI = express()

appAPI.use('/api', appAuths)

export default appAPI
