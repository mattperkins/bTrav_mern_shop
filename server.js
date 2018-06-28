const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// BodyParser Middleware
app.use(bodyParser.json())

// Db config
const db = require('./config/keys').mongoURI

// Connect to Mongo
mongoose.connect(db)
.then(()=>{console.log('connected')})
.catch(err => console.log(err))

// Use Routes
app.use('/api/items')

const port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`server running on ${port}`))