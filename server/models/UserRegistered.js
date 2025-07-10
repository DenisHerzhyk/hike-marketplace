import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String,required: true,unique: true},
    password: {type: String,required: true}
}, {collection: 'registered'});

const UserRegistered = mongoose.model('UserRegistered', UserSchema);

export {UserRegistered};