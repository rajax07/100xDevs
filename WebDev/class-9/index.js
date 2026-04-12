const express = require("express");

const app = express();

app.use(express.json());

const notes = []; // This is bad-- enventually we'll learn about databases.
 
// Endpoint 1
// POST - Create a note
app.post("/notes", function(req, res){
    const note = req.body.note;
    notes.push(note); // storing in global array 

    res.json({
        message: "Done!"
    })
})

//Endpoint 2
// GET - get all my notes

app.get("/notes", function(req, res){
    res.json({
        notes
    })
})

//Frontend, Endpoint 3
app.get("/", function(req, res){
    res.sendFile("c:/Users/kumar/100xDevs/WebDev/Frontend/index.html")
})



app.listen(3000);
