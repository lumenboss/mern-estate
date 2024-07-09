import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";


export const signup = async(req, res) =>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)  // using bcrypt to hash password
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
    } catch (error) {
        res.status(500).json(error.message);
        return;
    }
    res.status(201).json("User created");

}