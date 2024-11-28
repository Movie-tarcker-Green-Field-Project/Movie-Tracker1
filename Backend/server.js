const express = require('express');
const cors = require('cors');
const connection = require('./config/connection');
require('dotenv').config();

// initialize the app
const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});