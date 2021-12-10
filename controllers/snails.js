const snailDb = require("../models/snail")

const showAllSnails = (req,res) => {
    res.render("snails", {
        snails: snailDb.getAll()
    })
}   

const getSnail = (req, res) => {
    res.render("singleSnail", {
        snail: snailDb.getOne(req.params.id)
    })
}

module.exports = {
    showAllSnails,
    getSnail,
}