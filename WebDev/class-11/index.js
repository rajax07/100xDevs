// Create todo backend
const express = require("express");
const {authMiddleware} = require("./middleware");
const jwt = require("jsonwebtoken");
const app = express()

app.use(express.json());

let CURRENT_USER_ID = 1;
let CURRENT_TODOS_ID = 1;

let USERS = [];
let TODOS = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === username);
    if(existingUser) {
        res.status(403).json({
            message: "User with this username already exists"
        })
        return
    }
    USERS.push({
        id: CURRENT_USER_ID++,
        username,
        password
    })
    res.json({
        id: CURRENT_USER_ID-1
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
        }
    
        // create a jwt token
        const token = jwt.sign({
            userId: userExists.id
        }, "secret123123")
    
        res.json({
            token
        })
    
})

app.post("/todo", authMiddleware,(req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;
    TODOS.push({
        id: CURRENT_TODOS_ID++,
        title: title,
        description: description,
        userId: userId
    })
    res.json({
        message: "Todo made"
    })
})

app.delete("/todo/:todoId", authMiddleware, (req, res) => {
    const userId = req.userId;
    const todoId = parseInt(req.params.todoId); // string

    const doesUserOwnTodo = TODOS.find(t => t.id === todoId && t.userId === userId);

    if(doesUserOwnTodo){
        TODOS = TODOS.filter(t => t.id === todoId);
        res.json({
            message: "Deleted"
        })
    }else {
        res.status(411).json({
            message: "Either todos doesn't exist or this is not your todo"
        })
    }

})

app.get("/todos", authMiddleware,(req, res) => {
    const userId = req.userId;
    const userTodos =  TODOS.filter( t => t.userId === userId);
    res.json({
        todos: userTodos
    })
})

app.listen(3000);

