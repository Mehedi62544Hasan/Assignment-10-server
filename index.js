const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const allSubject = require("./data/learning.json")

app.get("/", (req, res) =>{
    res.send("new server is running");
});

app.get("/courses", (req, res) =>{
    res.send(allSubject);
});


app.listen(Port, () => {
    console.log("server is running", Port);
});