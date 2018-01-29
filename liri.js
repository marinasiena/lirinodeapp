var Inquirer = require("inquirer");
var request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');
var Twitter = require("twitter");
var arguments = process.argv;

//spotify f3f1a63f42a349e1beb83a29ffdd3172
//spotify 44201fdb2235432db835e52c1be2d217
var spotifyApi = new SpotifyWebApi({
  clientId : 'f3f1a63f42a349e1beb83a29ffdd3172',
  clientSecret : '44201fdb2235432db835e52c1be2d217',
  redirectUri : 'http://www.example.com/callback'
});

function getSpotify(name){
	spotifyApi.searchTracks(name)
	  .then(function(data) {
	    console.log('Search by ' + name, data.body);
	  }, function(err) {
	    console.error(err);
	  });

	spotifyApi.searchArtists(name)
	  .then(function(data) {
	    console.log("Search artists by " + name, data.body);
	  }, function(err) {
	    console.error(err);
	  });
}

//twitter
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'E02xmleNVTIsXW236cdw9kZBt',
  consumer_secret: 'yEQ4Zt4dsvnRIet0hVw9EyA1FkDZ5Co2xAx6DnQ9bQI2nzbemZ',
  access_token_key: '	955632906537402368-SYacGOEIXc2AeSUlYqmUnv2euEemafd',
  access_token_secret: 'bDEVgFO938Cjjci4ETf9KV8E4eUpPpE5dE2hUWDRI0Ucy'
});

  var params = {screen_name: 'nodejs'};
  function getTweets(){
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  }
});

//ombd 3c35d95b
var movieName = arguments[3];

function getMovie(name2Search){
		var queryUrl = "http://www.omdbapi.com/?t=" + name2Search + "&y=&plot=short&apikey=3c35d95b";
		console.log(queryUrl);

		request(queryUrl, function(error, response, body){
			if (!error && response.statusCode===200){
		  		console.log("===============");
		  		fullReleaseDate = JSON.parse(body).Released;

		  		console.log("full release date is " + fullReleaseDate);
		  		releaseYear = fullReleaseDate.split(" ");
		  		console.log("release year is " + releaseYear[2]);
			}

		});

}
request('http://www.omdbapi.com/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
