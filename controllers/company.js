const company = require('express').Router();

const models = require("../models");
const Company = models.company;

// get companies list
company.get("/company", (req, res) => {
    Company.findAll()
        .then(p => res.status(200).send(p))
        .catch(err => res.status(500).send(err))
});

// get company by code
company.get("/company/:code", (req, res) => {
    const code = atob(req.params.code);
    Company.findOne({ where: { email: code }})
        .then(p => res.status(200).send(p))
        .catch((err) => res.status(500).send(err))
})

// Add new company
company.post("/company", (req, res) => {
    const data = req.body;
    Company.create(data)
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})


// Update Company
company.put("/company/:code", (req, res) => {
    const code = atob(req.params.code);
    const data = req.body;
    Company.update(data, { where: { email: code }})
        .then(r => res.status(200).send(r))
        .catch(err => res.status(500).send(err))
})

// remove by code
company.delete("/company/:code", (req, res) => {
    const code = atob(req.params.code);
    Company.destroy({ where: { email: code }})
        .then(() => res.json({status: 200, message: "Company successfully removed"}))
        .catch((err) => res.send(err))
})
  
module.exports = company;