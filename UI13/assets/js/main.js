require("node-spotify-api")
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: process.env.client_id,
  secret: process.env.client_secret
});
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data['tracks']['items'][0]['name'])
});