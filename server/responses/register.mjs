import dotenv from 'dotenv';
import csrf from 'csurf';
import jwt from 'jsonwebtoken';
dotenv.config();
const csrfProtection = csrf({ cookie: true });
import { UserRegistered } from '../models/UserRegistered.js';

const register = (app) => {
    app.post('/api/register', csrfProtection, async(req, res) => {
        const {username, password, confirmPassword} = req.body;
        console.log("Register attempt for:", username, password);
        try {
            if (await UserRegistered.findOne({username})) {
                console.log("Username already exists!")
                return res.status(401).json({error: 'Username already exists'});
            }
            if (password !== confirmPassword) {
                console.log("Passwords do not match!")
                return res.status(401).json({error: 'Passwords do not match'});
            }
            const newUser = await UserRegistered.create({username: username, password: password});
            const token = jwt.sign({username: newUser.username, id: newUser._id}, process.env.ACCESS_KEY, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.json({success: true, redirect: '/login'});
        }
        catch (err) {
            console.log("Error:", err);
            res.status(500).json({error: 'Something wrong with register'});
        }
    });
}

export {register};