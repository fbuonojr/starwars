document.ready(function () {
    $("#search-btn").on("click", function () {
        var searchedCharacter = $("#character-search").val().trim();
        console.log("before replaced: " + searchedCharacter);
        searchedCharacter = searchedCharacter.replace(/\s+/g).toLowerCase();
        console.log("after replaced: " + searchedCharacter);
        $.get("/api/characters/" + searchedCharacter, function (data) {
            console.log(data);
            if (data) {
                $("#stats").show();
                $("#name").text(data.name);
                $("#role").text(data.role);
                $("#age").text(data.age);
                $("#force-points").text(data.forcePoints);
            } else {
                $("#name").text(
                    "The force is not strong with this one. Your character was not found.");
                $("#stats").hide();
            }
        });
    });

    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        var newCharacter = {
            name: $("#name").val().trim(),
            role: $("#role").val().trim(),
            age: $("#age").val().trim(),
            forcePoints: $("#force-points").val().trim()
        };

        $.post("/api/characters", newCharacter)
        .then(function(data) {
            console.log("add.html", data);
            alert("Adding character...");
        });
    });
});