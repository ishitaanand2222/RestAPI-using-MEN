//client will send request for get post put patch delete
//client will send request through a URL
//GET : http://localhost:9000/aliens
//GET : http://localhost:9000/aliens/<id>
//to give data from client to the server
//POST : http://localhost:9000/aliens

//for patch and delete id is to be used
//PATCH : http://localhost:9000/aliens/<id>


const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

//gets connected with the database
mongoose.connect(url, {useNewUrlParser:true})//url of your database
const con = mongoose.connection// con is connect object

con.on('open', () => {//open is an event
    console.log('connected...')
})

app.use(express.json())

//for all the aliens request u need to go to this file routes->aliens
const alienRouter = require('./routes/aliens')
//middleware i.e for the /aliens request u need to send it to the alientRouter 
app.use('/aliens',alienRouter)

//we need to listen to the server as well
app.listen(9000, () => {
    console.log('Server started')
})