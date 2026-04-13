const express = require("express");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

const app = express();

app.use(express.json());

const notes = []; // This is bad-- enventually we'll learn about databases.

const users = [{
    username: "raja",
    password: "123123"
}, {
    username: "vaayu",
    password: "121121"
}];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const userExist = users.find(user => user.username === username);
    if (userExist) {
        return res.status(403).json({
            message: "User with this username alredy exists"
        })
    }
    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "You have signed up"
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credentials"
        })
        return;
    }
    //jsonwebtoken
    const token = jwt.sign({
        username: username
    }, "raja123");

    res.json({
        token: token
    })

})

// POST - Create a note --AUTHENTICATED ENDPOINT
app.post("/notes", authMiddleware, function (req, res) {
    
    const username = req.username;
    const note = req.body.note;
    notes.push({note, username}); // storing in global array 

    res.json({
        message: "Done!"
    })
})


// GET - get all my notes -- AUTHENTICATED ENDPOINT

app.get("/notes", authMiddleware, function (req, res) {
    
    const username = req.username;
    const userNotes = notes.filter(note => note.username === username);

    res.json({
        notes: userNotes
    })
})


app.get("/", function (req, res) {
    res.sendFile("c:/Users/kumar/100xDevs/WebDev/Frontend/index.html")
})

app.get("/signup", function (req, res) {
    res.sendFile("c:/Users/kumar/100xDevs/WebDev/Frontend/signup.html")
})

app.get("/signin", function (req, res) {
    res.sendFile("c:/Users/kumar/100xDevs/WebDev/Frontend/signin.html")
})

app.listen(3000);
