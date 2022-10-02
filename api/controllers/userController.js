import bcrypt from 'bcryptjs'
import User from "../models/User.js";


export const createUser = async (req,res) =>{
    let {firstname,lastname,username,password} = req.body
    username= username.toLowerCase()

    
    
    try {
            password = await bcrypt.hash(password, 10)
            const user = new User({firstname,lastname,username,password})
            await user.save()
            res.status(201).send("User created")
        
    } catch (error) {
        res.status(406).send("username exist")
    }

}

export const getCredentials = async (req,res) =>{
    let {username,password} = req.body
    username= username.toLowerCase()

    try{
        const user = await User.findOne({username})
        if(!user) return res.status(404).send({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) return res.status(400).send({ message: "Invalid credentials" })
        

        const userDetails = {id:user._id,firstname:user.firstname,lastname:user.lastname,role:user.role}
        res.status(200).send(userDetails)        
        
    }catch(error){
        res.status(404).send(error.message)
    }
}

export const getAllUsers = async (req,res) =>{
    try {
        const users = await User.find().populate("metrics").exec() 
        let allUserDetails =[]
        users.forEach(user => {
            allUserDetails.push({id:user.id,firstname:user.firstname,lastname:user.lastname,metrics:user.metrics})
        });       
        res.status(200).send(allUserDetails)
    } catch (error) {
        res.send(error.message)
    }
    
}

export const getUser = async (req,res) =>{
     const {id} = req.params
     
    try {
        
        const user = await User.findById(id).populate("metrics").exec()
        const userDetails = {id:user.id,firstname:user.firstname,lastname:user.lastname,metrics:user.metrics}
                res.status(200).send(userDetails)
    } catch (error) {
        res.status(404).send("Not user found")
    }
}



