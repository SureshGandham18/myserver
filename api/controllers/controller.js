import Data from "../models/model.js";

export const info = async (req,res)=>{
    const {temp,humd,noise,room1,room2,book} = req.query;
    const newInfo = new Data({temp,humd,noise,room1,room2,book});
    await newInfo.save()
    res.status(201).json("data added successfully");
};