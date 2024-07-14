import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import { userError } from '../utils/error.js';

export const signup = async(req, res, next) =>{
    const {username, email, password} = req.body;
    const hashedPassword = await bcryptjs.hash(password, parseInt(5,10))  // using bcrypt to hash password
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User created");
    } catch (error) {
       next(error);
    }    

}



// controller for signing users in
export const signin = async(req, res, next) =>{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(userError(404, 'user not found'));
        }
        const isSamePassword = bcryptjs.compareSync(password, validUser.password);
        if(!isSamePassword){
            return next(userError(401, 'Wrong Credentials'))
        }
        const {password: pass, ...user} = validUser._doc; 
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
        res.cookie('access_token', token, {httpOnly: true,
        }).status(200).json(user);
    } catch (error) {
        next(error);
        
    }
}