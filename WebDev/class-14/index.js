const express = require("express");
const { Pool } = require("pg");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const z = require("zod");


const pool = new Pool({
    connectionString:
        "",
});

const app = express();

app.use(express.json());

const SignupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.email(),
});

app.post("/signup", async (req, res) => {
    const { data, success, error} = SignupSchema.safeParse(req.body);

    if (!success) {
        res.status(403).json({
            message: "Incorrect inputs", error:JSON.parse(error)
        })
        return
    }

    const username = data.username;
    const email = data.email;
    const password = data.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await pool.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`, [username, email, hashedPassword],
    );

    res.json({
        message: "Signup done",
        id: response.rows[0].id,
    });
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await pool.query(`SELECT * FROM users WHERE email=$1`, [
        email,
    ]);

    const userExists = response.rows[0];

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credential",
        });
        return;
    }

    const correctPassword = await bcrypt.compare(password, userExists.password);

    // password  -- is plaintext entered by user
    // userExists.password -- is hashed password from db
    //"it first gets the salt from the hashed password, appends the salt to the plaintext password, hashes it, and then compare. Return true or false"

    if (!correctPassword) {
        res.status(403).json({
            message: "Incorrect credentials",
        });
        return;
    }

    const token = Jwt.sign(
        {
            id: userExists.id,
        },
        "alsdhgoehgbciihidhe",
    );

    res.json({
        token,
    });
});

app.listen(3000);
