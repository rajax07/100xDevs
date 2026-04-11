// Created own Middleware

const express = require("express");
const app = express();

let requestCount = 0;

app.get("/requestCount", function (req, res) {
    res.send({
        requestCount
    })
})

// created own middleware, this applied on all route which comes after this.
function middleware(req, res, next) {
    requestCount++;
    next();
}


app.use(middleware)
app.use(express.json())


// Another way to use middleware by adding middleware in specific route
// app.get("/multiply", middleware, function(req, res) {
//     const a = parseInt(req.query.a); 
//     const b = parseInt(req.query.b);

//     const ans = a * b;

//     res.json({
//         ans: ans
//     })
// })


app.get("/multiply", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const ans = a * b;

    res.json({
        ans: ans
    })
})

app.get("/status", function (req, res) {
    res.send("up")
})


app.listen(3000);