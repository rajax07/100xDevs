const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kumarrajavishvakarma_db_user:8lUSbY3Z8SqNA48c@100xapps.gpn5jxw.mongodb.net/trello");


const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organizationSchema = mongoose.Schema({
    
        title: String,
        description: String,
        admin: mongoose.Types.ObjectId,
        members: [mongoose.Types.ObjectId] // storing array of userId not usernames
})


const userModel = mongoose.model("users", userSchema);
const organizationModel = mongoose.model("organizations", organizationSchema);

module.exports = {
    userModel,
    organizationModel

}