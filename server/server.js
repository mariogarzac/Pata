const express = require('express')
const mongoose = require('mongoose')
const app = express()

// mongoose.connect("mongodb+srv://mariogarzac99:PEeV2mkaZxnjr0bb@pata-app-cluster.3croijz.mongodb.net/?retryWrites=true&w=majority");

app.get("/api", (req, res) => {
    res.json({"users" : ["userOne", "userTwo", "userThree"]})
})

app.listen(5000, () => {console.log("Server running on port 5000")})
