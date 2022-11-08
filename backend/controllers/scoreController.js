const Score = require("../models/scoreModel")

//Create Score
const createScore = async (req, res) => {
    try {
        const score = await Score.create(req.body)
        res.status(200).json(score)
    }catch(error) {
        res.status(500).json({msg: error.message})
    }
}

//Get Scores
const getScores = async (req, res) => {
    try {
        const scores = await Score.find().sort({score: -1}).limit(500)
        res.status(200).json(scores)
    }catch(error){
        res.status(500).json({msg: error.message})
    }
}

module.exports = {createScore, getScores}