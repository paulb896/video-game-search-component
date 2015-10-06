# Video Game Search Component
Search for any video game using your choice of API

Install Dependencies

```npm install```
```bower install```

## Configure

cp config.js.dist config.js

In ```config.js``` set apiKey property to use [GiantBomb's](http://www.giantbomb.com/api/) API

```
var config = {
  serverPort: 3000,
  baseUrl: 'http://www.giantbomb.com/api/search?format=json&resources=game&expected_release_year=2015&limit=1',
  apiQueryParam: 'query',
  apiKeyName: 'api_key',
  apiKey: '123456789...' // SET THIS HERE
};
```

Or change **baseUrl**, **apiQueryParam**, **apiKeyName**,  and **apiKey** to configure for a different search api.


## Start Server

```npm start```

[Click Here to View Component  ](http://localhost:3000)
