const express = require("express");
const router = express.Router();
const snailControl = require("../controllers/snails");

router.get("/", snailControl.showAllSnails);
router.get("/:id", snailControl.getSnail)

module.exports = router;