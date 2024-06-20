import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    userText:{
        type:String,
        required:true
    },

});

const contactInfo = mongoose.model("contactDetails",contactSchema);
export default contactInfo;