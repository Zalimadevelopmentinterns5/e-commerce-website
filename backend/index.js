const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const mongoose = require('mongoose')
app.use(express.json())

const userroute = require('./route/userroute')
const productroute = require('./route/productroute')
const orderroute = require('./route/orderroute')


app.use('/api/user', userroute)
app.use('/api/product', productroute)
app.use('/api/order', orderroute)

const PORT = process.env.PORT

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(() => {
    console.log('connected to database')
    app.listen(5000,() => {
        console.log('http://localhost:5000')
    })
})
