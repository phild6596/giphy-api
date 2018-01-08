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
    "NFL",
    "slash",
    "funny",
    "Thug Life",
    "Funny Gym"];
//Renders buttons on start from array and when new button is made
function gifButtons() {
    for (var i = 0; i < giphy.length; i++) {
        var buttons = $("<button class='searchGif' id='"+giphy[i]+"'>" + giphy[i] + "</button>")
        buttons.appendTo("#gif-buttons");
    }
}gifButtons();

//searches Giphy API for new buttons made
function searchGiphs(term) {
    term = term.split(" ").join("%20");
    var gifsDiv = $(giphy).attr("data-name");
    var searchURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + term + "&limit=12&offset=0&rating=pg-13&lang=en";
//Ajax call
    $.ajax({
        url: searchURL,
        method: "GET"
    }).done(function (response) {
        for (j = 0; j < 12; j++) {
            var rating = response.data[j].rating;
            var urlThumb = response.data[j].images.original.url;
            var urlStill = response.data[j].images.original_still.url;
            var gifHolder = $("<div class='gifRow'>");
            var img = "<img class='gifImg' data-moving='" + urlThumb + "' src='" + urlStill + "'>";
            var rated = "<p>Rating: " + rating.toUpperCase() + "</p>";
            gifHolder.append(img, rated);
            $(".gif-results").append(gifHolder);
        }console.log(response);
    });
};

//Function when SEARCH button is pressed
$("#gifSearch").on("click", function () {
    event.preventDefault();
    var newGif = $("#userInput").val().trim();
    giphy.push(newGif);
    $("#gif-buttons").empty();
    gifButtons();
})

//Algorithm for GIF button clicked to print to HTML
$("#gif-buttons").on("click", ".searchGif", function () {
    $(".gif-results").empty();
    var searchWord = $(this).attr("id");
    searchGiphs(searchWord);
});

//Starting and stopping GIfs once printed to HTML
$(".gif-results").on("click", ".gifImg", function () {
    var start = $(this).attr("data-moving");
    var pause = $(this).attr("src");
    $(this).attr("src", start);
    $(this).attr("data-moving", pause);
})

})
