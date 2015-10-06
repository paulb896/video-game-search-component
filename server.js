var express = require('express');
var request = require('request');
var app = express();
var config = require('./config');

// Setup static server for current directory
app.use(express.static(__dirname ));

function getApiUrl(searchQuery) {
  return config.baseUrl
    + '&' + config.apiKeyName + '=' + config.apiKey
    + '&' + config.apiQueryParam + '=' + searchQuery;
}

/**
 * Attempt to use config url to search for query string parameter "search"
 *
 * Example:
 *  /games?search=mega+man
 */
app.get('/games', function(req, res) {
  request(getApiUrl(req.query.search), function (error, response, body) {
    if (error){
      return console.log('Error:', error);
    }
    if (response.statusCode !== 200){
      return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    // Set cross origin header to allow site to access local sever
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // Return first search result
    res.end(JSON.stringify(JSON.parse(body).results[0]));
  });
});

app.listen(config.serverPort);
console.log('Listening on port ' + config.serverPort);

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something really bad happened');
});
