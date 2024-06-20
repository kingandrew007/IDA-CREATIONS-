import mongoose from "mongoose";
const dbconnection = ()=>{
    mongoose.connect("mongodb://localhost:27017/idacreations").then(res => console.log("db connected")).catch(err =>console.log(`db not connected ${err}`));
};

export default dbconnection;