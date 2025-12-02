const serveIndex = require("serve-index");
const express = require("express");
const path = require("path");
const app = express();

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Directory List
app.use("/", serveIndex(path.join(__dirname, "/public"), { icons: true, view: "details" }));

module.exports = app;
