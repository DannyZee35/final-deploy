const mongoose=require('mongoose');


const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["course instructor", "course coordinator", "head of department", "course folder convenor"],
    },
    status:{
      type: String,
      enum: ["Enable", "Disable"],
      default: "Disable"
    }
  });
  
module.exports =mongoose.model('User',userSchema);