const express = require("express");
const app = express();
const cors = require("cors")
require('dotenv').config();

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

app.post()

app.listen(`${process.env.port}`)