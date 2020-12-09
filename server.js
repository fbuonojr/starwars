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

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

//route to display all characters
app.get("/api/characters", function (req, res){
    return res.json(characters);
});

//displays specific character or returns false
app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for(var i = 0; i < characters.length; i++){
        if(chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

//create a new character object
app.post("/api/characters", function(req, res) {
    var newCharacter = req.body;

    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});