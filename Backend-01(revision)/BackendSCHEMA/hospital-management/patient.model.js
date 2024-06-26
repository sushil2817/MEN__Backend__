import mongoose from "mongoose"


const patientSchema = new mongoose.Schema({
        name:{
          type:String,
          reuired:true
        },
        dignosedWith:{
          type:String,
          required:true
        },
        address:{
          type:String,
          required:true
        },
        age:{
          type:Number,
          required:true
        },
        bloodGroup:{
          type:String,
          required:true
        },
        gender:{
          type:String,
           enum:["M","F","O"],
           reuired:true
        },
        addmittedIn:{
          type:mongoose.Schema.Type.ObjectId,
          ref:"Hospital"
        }
        

    },
  {timestamps:true})


export const Patient = mongoose.model("Patient",patientSchema)