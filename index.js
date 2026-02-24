import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

 const Name =  process.env.userName
 const LastName = process.env.LastName
console.log(Name,LastName);