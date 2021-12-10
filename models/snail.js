const snailDb = require("../data/snails")

const getAll = () => {
    return snailDb.snails;
}

const getOne = (idx) => {
    return snailDb.snails[idx];
}

module.exports = {
    getAll,
    getOne
}