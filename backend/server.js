const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const scoreRoutes = require("./routes/scoreRoute")

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(
    {origin: ["http://localhost:3000/", "https://lotr-quote-app.onrender.com"]
}))
app.use("/api/scores", scoreRoutes)


const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))