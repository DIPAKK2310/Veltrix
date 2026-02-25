import dotenv from "dotenv"
import express from "express"

const app = express()

dotenv.config({
    path:"./.env"
})
const port = process.env.PORT //load after dotenv.config() is called

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/about',(req,res)=>{
    res.send("Hello World to about")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})


