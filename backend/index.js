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


app.use('/api/user', userroute)
app.use('/api/product', productroute)
app.use('/api/order', orderroute)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('connected to database')
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
})
.catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
})
