const express = require("express")

const jwt = require("jsonwebtoken");


//Design in memory data schema

//username , password | USERS Table
//organization  | ORGANIZATION TABLE
//boards   | BOARDS TABLE
//issues  | ISSUES TABLE

let USERS_ID = 1;
let ORGANIZATION_ID = 1;
let BOARDS_ID = 1;
let ISSUES_ID = 1;

const USERS = [];
const ORGANIZATION = [{
    id: 1,
    title :"100xdevs",
    description: "Learning coding platform",
    admin: 1,
    members: [2]
},{
    id: 2,
    title: "raman's org",
    description:"Experimenting",
    admin: 1,
    members: []
}];
const BOARDS = [{
    id: 1,
    title: "100xschool website frontend",
    organization: 1
}];
const ISSUES = [{
    id: 1,
    title: "Add dard mode",
    boardId: 1,
    state: "IN_PROGRESS" // NEXT_UP | "IN_PROGRESS" | "DONE" | ARCHIEVED
},{
    id: 2,
    title: "Allow admins to create more courses",
    boardId: 1,
    state: "Done"
}];

const app = express();

app.use(express.json());


// CREATE 
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username);
    if(userExists){
        res.status(411).json({
            message: "User with this username already exits"
        });
        return;
    }
    USERS.push({
        username,
        password,
        id: USERS_ID++
    })
    res.json({
        message:"You have signed up successfully"
    })

})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username && u.password === password);

    if(!userExists){
        res.status(403).json({
            message: "You have wrong credentials"
        });
        return;
    }

    // create a jwt token
    const token = jwt.sign({
        userId: userExists.id
    }, "trello12134password")

    res.json({
        token
    })

})

app.post("/organization", (req, res) => {

})

app.post("/add-member-to-organization", (req, res) => {

})

app.post("/board", (req, res) => {

})

app.post("/issue", (req, res) => {

})

//READ
app.get("/boards", (req, res) => {

})

app.get("/members", (req, res) => {

})

//UPDATE
app.put("/issues", (req, res) => {

})
//DELETE
app.delete("/members",(req,res) => {

})




app.listen(3000);

