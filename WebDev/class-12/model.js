const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organizationSchema = mongoose.Schema({
    
        title: String,
        description: String,
        admin: mongoose.Types.ObjectId,
        members: []
})
