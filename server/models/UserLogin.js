import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String,required: true,unique: true},
    password: {type: String,required: true}
}, {collection: 'login'});

const UserLogin = mongoose.model('UserLogin', UserSchema);

export {UserLogin};