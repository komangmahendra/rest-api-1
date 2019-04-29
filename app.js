require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
const routes = require('./routes')

app.use('/', routes)

app.listen(process.env.PORT, () =>{
    console.log(`listen on port ${process.env.PORT}`)
})