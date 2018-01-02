$(document).ready(function() {
    var apiKey = "KE2wjTsn5qqmmYQklvaRG7n94T7Kj1Ih";

function gifButtons() {
    var giphy = ["Los Angeles Chargers", "San Diego","Gibson Les Paul","Hell Yeah","No way","The Last Jedi","Star Wars","Party","The Godfather","NFL"];

    for (var i = 0; i < giphy.length; i++) {
        var buttons = $("<button>" + giphy[i] + "</button>")
        buttons.appendTo("#gif-buttons");
        console.log(buttons);
    } console.log(giphy);
}gifButtons();

})
