import mongoose from "mongoose";



const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@my-blog-app.expdhh6.mongodb.net/?retryWrites=true&w=majority&appName=my-blog-app`;
    try{
     await mongoose.connect(URL, {useNewUrlParser:true});
     console.log("Database connected successfully");
    }
    catch(error){
        console.log("Connection failed", error);
    }
}

export default Connection;