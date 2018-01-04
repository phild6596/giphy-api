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
        var buttons = $("<button class='searchGif' id='"+giphy[i]+"'>" + giphy[i] + "</button>")
        buttons.appendTo("#gif-buttons");
        //console.log(buttons);
    } console.log(giphy);
}gifButtons();

function searchGiphs(term) {
    term = term.split(" ").join("%20");
    var gifsDiv =$(giphy).attr("data-name");
    var searchURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + term + "&limit=10&offset=0&rating=&lang=en";

    $.ajax({
        url: searchURL,
        method: "GET"
    }).done(function (response) {
        for (j = 0; j < 10; j++) {
            var rating = response.data[j].rating;
            var urlThumb = response.data[j].images.original.url;
            var urlStill = response.data[j].images.original_still.url;
            var gifHolder = $("<div class='gifRow'>");
            var img = "<img class='gifImg' data-moving='" + urlThumb + "' src='" + urlStill + "'>";
            var rated = "<p>Rating: " + rating.toUpperCase() + "</p>";
            gifHolder.append(rated, img);
            $(".gif-results").append(gifHolder);
        }
    });
};

//Adding new Gif buttons
$("#gifSearch").on("click", function () {
    event.preventDefault();
    var newGif = $("#userInput").val().trim();
    giphy.push(newGif);
    $("#gif-buttons").empty();
    gifButtons();
    console.log(newGif);
})

$("#gif-buttons").on("click", ".searchGif", function () {
    $(".gif-results").empty();
    var searchWord = $(this).attr("id");
    searchGiphs(searchWord);
});

})
