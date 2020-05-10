const user = require('express').Router();

const models = require("../models");
const User = models.user;

// get companies list
user.get("/user", (req, res) => {
    User.findAll()
        .then(p => res.status(200).send(p))
        .catch(err => res.status(500).send(err))
});

// get user by code
user.get("/user/:code", (req, res) => {
    const code = atob(req.params.code);
    User.findOne({ where: { email: code }})
        .then(p => res.status(200).send(p))
        .catch((err) => res.status(500).send(err))
})

// Add new user
user.post("/user", (req, res) => {
    const data = req.body;
    User.create(data)
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})


// Update user
user.put("/user/:code", (req, res) => {
    const code = atob(req.params.code);
    const data = req.body;
    User.update(data, { where: { email: code }})
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})

// remove by code
user.delete("/user/:code", (req, res) => {
    const code = atob(req.params.code);
    User.destroy({ where: { email: code }})
        .then(() => res.json({status: 200, message: "User successfully removed"}))
        .catch((err) => res.send(err))
})
  
module.exports = user;