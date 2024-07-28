import mongoose from "mongoose";
import { DB_name } from "../utils/Constants.js";



const DB_Connection=async()=>{
    try{
        const db_Initialization= await mongoose.connect(`${process.env.DATABASE_URL}/${DB_name}`);
        console.log(`\nMongo DB has connected successfully :) DB host: ${db_Initialization.connection.host}`)

    }
    catch(err){
        console.error({Data_Base_Failed_to_Connect:err})
        process.exit(1);
    }
}
export default DB_Connection;