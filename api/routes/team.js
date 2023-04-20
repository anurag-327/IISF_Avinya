const express=require("express")
const router=express.Router();
const Team=require("../model/team")

//  /team/register - to register teams 
//  /team/getteams - to get list of all teams 
//  /team/getteam/:id - to get details of a single team by ID 


router.post("/register",async (req,res) =>
{
    try{
        const teamDetail= await Team.findOne({
            $or: [{
                email:req.body.email
            }, {
                teamName:req.body.teamName
            }]
        })
        if(teamDetail)
        {
            console.log("hii")
            return res.status(409).json({status:409,message:"Team already entered with given data. "})
        }
        else
        {
            const newTeam=new Team(req.body);
            const result=await newTeam.save();
            if(result)
            return res.status(200).json({status:200,message:"team created successfully",teamId:result._id})
            else
            return res.status(500).json({status:400,message:"Cannot Register Team"})
        }
        
    }catch(err)
    {
        console.log(err.message)
        return res.status(500).json({status:400,message:"Internal Server Error"})
    }
})
router.get("/getteams",async(req,res) =>
{
    try{
        const result=await Team.find();
        return res.status(201).json(result);
    }catch(err) 
    {
        return res.status(500).json("Error getting teams");
    }
})
router.get("/getteam/:id",async(req,res) =>
{
    try{
        const result=await Team.findById(req.params.id);
        return res.status(201).json(result);
    }catch(err) 
    {
        return res.status(500).json("Error getting teams");
    }
})
module.exports=router