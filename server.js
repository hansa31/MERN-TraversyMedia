const express = require('express')
const mongoose = require('mongoose')        // MongoDB object modeling tool designed to work in an asynchronous environment.
const bodyParser = require('body-parser')   //body parsing middleware (this is included in express itself -> app.use(express.json()))

const items_router = require('./routes/api/items')

const app = express()

//BodyParser middleware -> Returns middleware that only parses json
app.use(bodyParser.json())

// DB config
const db = require('./config/keys.js').mongoURI    //look at keys.js

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })       
    .then(() => {                               //promise used here -> see syntax
        console.log('MongoDB connected...');
    })
    .catch(err => {
        console.log(err);
    })

const port = process.env.PORT || 3000           //process.env.PORT is for live hosting in Horoku

//to use items
app.use('/api/items',items_router)         //any reqs with api/items/* should reffer to items object which is the file

//test
app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})