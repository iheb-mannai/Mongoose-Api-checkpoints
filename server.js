const express = require('express')
const connectDB = require('./database/connect')
const app = express()
const contactRouter = require('./routes/person')
app.use(express.json())
connectDB()
app.use('/persons', contactRouter )

















//server creation :
const PORT = 5000

app.listen(PORT , err => {
    err ? console.log('server error ' , err) : console.log(`Server is running at ${PORT}`)
})