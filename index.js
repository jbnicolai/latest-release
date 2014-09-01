var https = require('https');

function requestJson(config, cb) {
  var request = https.request(config, function (res) {
    var output = '';

    res.setEncoding('utf-8');

    res.on('data', function (chunk) {
      output += chunk;
    });

    res.on('end', function () {
      cb(JSON.parse(output));
    });

  });

  request.on('error', function (err) {
    cb(undefined, err);
  });

  request.end();
}

module.exports = function (user, repository, cb) {
  var config = {
    port: 443,
    host: 'api.github.com',
    path:  '/repos/' + user + '/' + repository + '/releases',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-agent': 'node.js'
    }
  };

  requestJson(config, function (json, err) {
    if (err) {
      cb(undefined, err);
    }

    cb(json[0]);
  });

};
