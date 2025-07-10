import dotenv from 'dotenv';  
dotenv.config();
import express from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import csrf from 'csurf';
import { fileURLToPath } from "url";
import passport from 'passport';
import Strategy from 'passport-local';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserRegistered } from '../models/UserRegistered.js';

const LocalStrategy = Strategy;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  const csrfProtection = csrf({ cookie: true });
  const loginHandler = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  };
  passport.use(
        new LocalStrategy (
          { usernameField: 'username', passwordField: 'password' },
          async(username, password, done) => {
            console.log("Login attempt(full): ", username, password)
            try {
              const user = await UserRegistered.findOne({username});
              if (!user) {
                  console.log("Wrong input data!")
                  return done(null, false, {message: "Wrong input data!"})
              }
              if (user.password !== password) {
                return res.status(401).json({ error: 'Invalid password' });
              }
              console.log('Login successful!')
              return done(null, user)
            }
            catch (err) {
              console.log("Error:", err);
              return done(null, false, {message: "Wrong input data!"})
            }   
        })
    )
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })
    passport.deserializeUser(function (id, done) {
        done(null, {id: 1, name:'denys@ucm.es'})
    })
  app.use('/login', csrfProtection, loginHandler);
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  app.use(express.static(path.join(__dirname, '../../dist')));
  
};

export { middleware };