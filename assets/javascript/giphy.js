$(document).ready(function() {
    var apiKey = "KE2wjTsn5qqmmYQklvaRG7n94T7Kj1Ih";

   
    var giphy = ["Los Angeles Chargers", 
    "San Diego",
    "Gibson Les Paul",
    "Hell Yeah",
    "No way",
    "The Last Jedi",
    "Star Wars",
    "Party",
    "The Godfather",
    "NFL"];

function gifButtons() {
    for (var i = 0; i < giphy.length; i++) {
        var buttons = $("<button>" + giphy[i] + "</button>")
        buttons.appendTo("#gif-buttons");
        //console.log(buttons);
    } console.log(giphy);
}gifButtons();

//Adding new Gif buttons
$("#gifSearch").on("click", function () {
    event.preventDefault();
    var newGif = $("#userInput").val().trim();
    giphy.push(newGif);
    $("#gif-buttons").empty();
    gifButtons();
    console.log(newGif);
})

})
