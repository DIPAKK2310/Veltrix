export default function DataBase => {
    const db = schema({
        name : String,
        LastName: String,
        email: String,
        password?: Number,
        
    })
}