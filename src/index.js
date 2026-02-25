import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
 const Profession = "Software Engineer"
 const Name =  process.env.userName
 const LastName = process.env.LastName
console.log(Name,LastName,":",Profession);