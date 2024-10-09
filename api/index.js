const express = require("express");
const app = express();
const cors = require("cors")
require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");

const corsOptions = {
    origin: 'https://zidio-web.vercel.app',
    optionsSuccessStatus: 200,
}
//cors middleware
app.use(cors(corsOptions));

app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Backend is working"
    });
});

app.post("/contact", (req, res) => {
    res.status(200).json({
        message: "We will contact you, Shorty!"
    })
})

app.post("/subcriber",(req, res) =>{
    res.status(200).json({
        message: "You subcribed to newsletter, successfully!"
    });
});

async function main() {
    try {
        await mongoose.connect(`${process.env.mongoDbString}`);
        console.log("db is connected")
        app.listen(`${process.env.PORT}`, () => {
            console.log(`Listening on PORT: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

main();

module.exports = app;