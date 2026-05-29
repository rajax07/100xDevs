const express = require("express");
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: ""
})

const app = express();

app.use(express.json());

app.post("/signup",async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await pool.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`)

    res.json({

        message:"Signup done"
    })

});

app.post("/signin", (req, res)=>{

});






app.listen(3000);