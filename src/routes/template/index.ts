import appAuths from "./login.routes";
import express from "express"

const appAPI = express()

appAPI.use('/template', appAuths)

export default appAPI