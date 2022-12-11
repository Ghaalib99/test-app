import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const userRoutes = express.Router();

userRoutes.post(
    "/save",
    expressAsyncHandler(async (req, res) => {
        // console.log(req)
      const newUser = new User({
        name: req.body.name,
        sector: req.body.sector,
        agree: req?.body?.agree,
      });
  
   
      try {
        const user = await newUser.save();
        res.status(200).send({status:true, message: "User successfully saved", data: user});
      }catch(error){
        res.status(301).send({status:false, message: "User not saved", data: error});

      }
  
      
    })
  )

  export default userRoutes;