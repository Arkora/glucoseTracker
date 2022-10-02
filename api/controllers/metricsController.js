import mongoose from "mongoose";
import User from "../models/User.js";
import Metrics from "../models/Metrics.js";

export const addValue = async (req,res) =>{
    const {id,glucose} = req.body
    try {
         const metric = await  Metrics.create({glucose})
         const user = await User.findById(id)
         const newUser = await User.findByIdAndUpdate(
            id,
            {
                $push: { metrics: metric._id }
            },
            { new: true, useFindAndModify: false },
        )
                 
        res.status(200).send(user)
    } catch (error) {
        res.send(error.message)
    } 

}

export const deleteValue = async(req,res) =>{
    const {id} = req.params
    try {
        await Metrics.findByIdAndDelete(id)
        res.status(200).send("Deleted")
    } catch (error) {
        res.send(error.message)
    }

}

export const updateValue = async(req,res) =>{
    const {id} = req.params
    const {glucose} = req.body   
    try {
        const updated = await Metrics.findByIdAndUpdate(id,{glucose:glucose})
        res.status(200).send(updated)
    } catch (error) {
        res.send(error.message)
    }
}