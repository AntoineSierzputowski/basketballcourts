// import modules & files
const express = require("express");
const app = express();
const locations = require("./routes/locations.js"); // route location

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use("/", locations); // appeler middleware

module.exports = app; // export file
