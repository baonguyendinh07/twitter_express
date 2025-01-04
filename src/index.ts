import app from "~/routes"
import express from 'express'

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

