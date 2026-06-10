const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const mongoose = require('mongoose')
const userroute = require('./route/userroute')
app.use(express.json())
app.use('/api/user', userroute)

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(() => {
    console.log('connected to database')
    app.listen(5000, () => {
        console.log('http://localhost:5000')
    }
    )
})
