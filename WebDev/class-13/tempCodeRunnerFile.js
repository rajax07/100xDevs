const express = require("express");
const { Pool } = require('pg')
const Jwt =  require("jsonwebtoken");

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_X9kBxHi0nobL@ep-round-firefly-aq6fdpuz-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const response = await pool.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')RETURNING id;`)
    console.log(response);

    res.json({
        message: "Signup done",
        id: response.rows[0].id
    })

});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`)
    const response = await pool.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
    console.log(response);

    const userExists = response.rows[0];

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credential"

        });
        return;
    } 
    const token = Jwt.sign({
        userId: userExists.id
    }, "alsdhgoehgbciihidhe")

    res.json({
        token,
    });
