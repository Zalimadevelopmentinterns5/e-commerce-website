const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())
const path = require("path")
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

const userroute = require('./route/userroute')
const productroute = require('./route/productroute')
const orderroute = require('./route/orderroute')
const tenantsroute = require('./route/tenantsroutes')

app.use('/api/user', userroute)
app.use('/api/product', productroute)
app.use('/api/order', orderroute)
app.use('/api/tenants', tenantsroute)

const PORT = process.env.PORT

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(() => {
    console.log('connected to database')
    app.listen(5000,() => {
        console.log('http://localhost:5000')
    })
})
