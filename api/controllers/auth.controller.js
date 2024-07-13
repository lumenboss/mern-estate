import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";


export const signup = async(req, res, next) =>{
    const {username, email, password} = req.body;
    console.log(password)
    const hashedPassword = await bcryptjs.hash(password, parseInt(5,10))  // using bcrypt to hash password
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User created");
    } catch (error) {
       next(error);
    }
    

}