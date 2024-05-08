const express = require("express")
require("dotenv").config({path:"./config/.env"})
const bodyParser =require("body-parser")
const cors = require ("cors")
const json = require('body-parser/lib/types/json')


const app = express()
 

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const route = require("./routes/enseignant.route")

require("./config/dataBase")

app.use('/enseignant', route)

app.listen(process.env.PORT, ()=> {
    console.log(`server started on ${process.env.PORT}`)
})