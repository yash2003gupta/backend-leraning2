import {User} from "../models/user.js";

export const getAllUsers = async (req,res)=>{

    const users =  await  User.find({});
   
   //  console.log(req.query); // object in params ... access value through quesry
      
   //  const keyword = req.query.keyword; // get value of param keyword 
   //  console.log(keyword);
    
       res.json({
           success:true,
           users,
       });
   };

   export const register = async (req,res)=>{
    
    const {name, email,password} = req.body;

     await User.create({
        name, email,password,

    });
   
       res.status(201).cookie("tempi","lol").json({
           success:true,
          message:"registered successfully",
       });
    };

    export const specialFunc = (req,res)=>{
        res.json({
            success: true,
            message:"just joking",
        });
    };

    export const getUserDetails = async (req,res)=>{
        // const { id } = req.body;
        const { id }  = req.params;
        const user = await User.findById(id);
        // const user = await User.findById(id);
        //  console.log(req.params);
        res.json({
            success: true,
            user,
        });
       };

       export const updateUser = async (req,res)=>{
        // const { id } = req.body;
        const { id }  = req.params;
        const user = await User.findById(id);
        // const user = await User.findById(id);
        //  console.log(req.params);
        res.json({
            success: true,
           message:"updated",
        });
       };

       export const deleteUser = async (req,res)=>{
        // const { id } = req.body;
        const { id }  = req.params;
        const user = await User.findById(id);
        // await user.remove();
        res.json({
            success: true,
           message:"deleted",
        });
       };