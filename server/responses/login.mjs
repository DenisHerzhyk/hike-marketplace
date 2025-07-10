import dotenv from 'dotenv';
dotenv.config();

import csrf from 'csurf';
import jwt from 'jsonwebtoken';
import { authenticate } from '../middlewares/authenticate.mjs';
import { passportAuthenticate } from '../middlewares/passportAuthenticate.mjs';
import { UserRegistered } from '../models/UserRegistered.js';
import { UserLogin } from '../models/UserLogin.js';

const csrfProtection = csrf({ cookie: true });

const login = (app) => {
    app.get('/api/csrf', csrfProtection, (req, res) => {
        res.json({csrfToken: req.csrfToken()});
    });

    app.get('/api/check-auth', (req, res) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send('Access denied');
        }
        try {
            const user = jwt.verify(token, process.env.ACCESS_KEY);
            res.json({ user});
        } 
        catch (err) { 
            res.status(401).send({error: 'Invalid Token'});
        }
        
    });

    app.delete('/api/logout', async(req, res) => {
        res.clearCookie('token');
        try {
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).send('Access denied');
            }
            const payload = jwt.verify(token, process.env.ACCESS_KEY);
            const username = payload.username;
            const user = await UserLogin.findOne({username});
            console.log("Logout attempt for:", username);
            if (!user) {
                console.log("Wrong input data!")
                return res.status(401).json({error: 'Something wrong with logout'});
            }
            await UserLogin.deleteOne({username});
            res.json({success: true, redirect: '/'});
        }
        catch (err) {
            console.log("Error:", err);
            res.status(500).json({error: 'Something wrong with logout'});
        }
    });
    app.post('/api/login', csrfProtection, async(req, res) => {
        const {username, password} = req.body;
        console.log("Login attempt for:", username, password);
        try {
            const user = await UserRegistered.findOne({username});
            if (!user) {
                console.log("Wrong input data!")
                return res.status(401).json({error: 'Invalid Credentials'});
            }
            if (user.password !== password) {
                console.log("Wrong passport!")
                return res.status(401).json({ error: 'Invalid password' });
            }
            const token = jwt.sign({username: user.username, id: user._id}, process.env.ACCESS_KEY, { expiresIn: '1h' });
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            await UserLogin.create({username: user.username, password: user.password})
            res.json({success: true, redirect: '/'});
        }
        catch (err) {
            console.log("Error:", err);
            res.status(500).json({error: 'Invalid Credentials'});
        }
    });

    app.get('/cart', authenticate, (req, res) => {
        if(req.user.email) {
            return res.json({ username: req.user.email });
        }
        res.status(401).json({ error: 'Unauthorized' });
    });
}

export { login };