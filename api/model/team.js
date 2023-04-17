const mongoose=require("mongoose")
const teamSchema=new mongoose.Schema({
    teamName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    college:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    participants:[
        {
            name:{
                type:String,
                required:true
            },
            year:{
                type:String,
                required:true
            },
            
        }
    ]
},{
    timestamps:true
})

module.exports=mongoose.model("teams",teamSchema);