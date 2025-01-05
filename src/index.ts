import app from "~/routes"
import express from 'express'
import 'dotenv/config'
import databaseService from '~/services/database.services'

const PORT = 5000

databaseService.ConnectDatabase().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

