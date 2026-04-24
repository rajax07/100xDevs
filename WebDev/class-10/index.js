const express = require("express")
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

//Design in memory data schema

//username , password | USERS Table
//organization  | ORGANIZATION TABLE
//boards   | BOARDS TABLE
//issues  | ISSUES TABLE

let USERS_ID = 1;
let ORGANIZATION_ID = 1;
let BOARD_ID = 1;
let ISSUES_ID = 1;

const USERS = [];
const ORGANIZATIONS = [{
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
    title: "Add dark mode",
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

// Authenticated Route
app.post("/organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    ORGANIZATIONS.push({
        id: ORGANIZATION_ID++,
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })
    res.json({
        message: "Org created",
        id: ORGANIZATION_ID - 1
    })
})

app.post("/add-member-to-organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organizationId =  req.body.organizationId;
    const memberUserUsername = req.body.memberUserUsername;

    const organization = ORGANIZATIONS.find(org => org.id === organizationId);
    
    if(!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not an admin ot this org"

        })
        return;
    }
    const memberUser = USERS.find(u => u.username === memberUserUsername);

    if(!memberUser){
        res.status(411).json({
            message: "No user with this username exists in our db"

        })
        return
    }

    organization.members.push(memberUser.id)

    res.json({
        message: "New member added!"
    })

})

app.post("/board", (req, res) => {

})
app.post("/issue", (req, res) => {

})

//READ
app.get("/organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organizationId = parseInt(req.query.organizationId); // "1"

    const organization = ORGANIZATIONS.find(org => org.id === organizationId);

    console.log(organization);
    console.log(userId);
    if (!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesnt exist or you are not an admin of this org"
        })
        return
    }

    res.json({
        organization: {
            ...organization,
            members: organization.members.map(memberId => {
                const user = USERS.find(user => user.id === memberId);
                return {
                    id: user.id,
                    username: user.username
                }
            })
        }
    })
})

app.get("/boards", (req, res) => {

})

app.get("/members", (req, res) => {

})

//UPDATE
app.put("/issues", (req, res) => {

})
//DELETE
app.delete("/members",(req,res) => {
    const userId = req.userId;
    const organizationId =  req.body.organizationId;
    const memberUserUsername = req.body.memberUserUsername;

    const organization = ORGANIZATIONS.find(org => org.id === organizationId);
    
    if(!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not an admin ot this org"

        })
        return;
    }
    const memberUser = USERS.find(u => u.username === memberUserUsername);

    if(!memberUser){
        res.status(411).json({
            message: "No user with this username exists in our db"

        })
        return
    }

    organization.members = organization.members.filter(user => user.id !== memberUser.id);

    res.json({
        message: "member deletd!"
    })

})




app.listen(3000);

