const broker = require('express').Router();

const models = require("../models");
const Broker = models.broker;

// get broker list
broker.get("/broker", (req, res) => {
    Broker.findAll()
        .then(p => res.status(200).send(p))
        .catch(err => res.status(500).send(err))
});

// get broker by code
broker.get("/broker/:code", (req, res) => {
    const code = atob(req.params.code);
    Broker.findOne({ where: { email: code }})
        .then(p => res.status(200).send(p))
        .catch((err) => res.status(500).send(err))
})

// Add new broker
broker.post("/broker", (req, res) => {
    const data = req.body;
    Broker.create(data)
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})


// Update Broker
broker.put("/broker/:code", (req, res) => {
    const code = atob(req.params.code);
    const data = req.body;
    Broker.update(data, { where: { email: code }})
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})

// remove by code
broker.delete("/broker/:code", (req, res) => {
    const code = atob(req.params.code);
    Broker.destroy({ where: { email: code }})
        .then(() => res.json({status: 200, message: "Broker successfully removed"}))
        .catch((err) => res.send(err))
})
  
module.exports = broker;