//dependencies
var express = require("express");
var path = require("path");

//express app
var app = express();
var PORT = 3000;

//sets up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 55,
        forcePoints: 1350
    }
];