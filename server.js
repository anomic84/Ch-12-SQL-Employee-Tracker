// Grabs express, mysql, database, and my api via require method
const express = require("express");
const mysql = require("mysql2");
const api = require("index.js")

// allows connection to 3rd party server *OR* my local server
const PORT = process.env.PORT || 3001;

// allows me to use "app" in my code to refer to (or use) express functions
const app = express();

// middleware boilerplate that lets me connect to my api etc
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api);

//boilerplate response
app.use((req, res) => {
    res.status(404).end();
});

//boilerplate code to connect to server port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});