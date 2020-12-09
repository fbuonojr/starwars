//dependencies
var express = require("express");
var path = require("path");

//express app
var app = express();
var PORT = 3000;

//sets up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());