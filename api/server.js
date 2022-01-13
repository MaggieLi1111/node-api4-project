const express = require("express");
const server = express();
const cors = require("cors")

server.use(express.json())
server.use(cors())
server.get("/", (req,res) => {
    res.send(`<h2>Rock and ROll!</h2>`);
})


const users = [
    {
        user:"foo",
        password:"bar"
    }
]
const register = [
    {
        user:"foo",
        password:"bar"
    }
]
const login = [
    {
        user:"foo",
        password:"bar"
    }
]

server.get("/api/user", (req, res) => {
    res.status(200).json(users)
})

server.post("/api/register", (req, res) => {
    res.status(201).json(register)
})

server.post("/api/login",(req,res)=> {
    if(!login) {
        res.status(404).json({
            message:"Please provide correct credentials"
        })
    } else {
        res.status(200).json({
            message:"Welcome and Have Fun"
        })
    }
})

module.exports = server;