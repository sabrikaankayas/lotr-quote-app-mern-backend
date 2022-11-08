const express = require("express")

const router = express.Router()

const {createScore, getScores} = require("../controllers/scoreController")

router.route("/").get(getScores).post(createScore)


module.exports = router