var http = require('http');
var URLParser = require('url');
var readYaml = require('read-yaml');

exports.handler = function (json, context) {
  try {
    console.log(json);
    console.log(context);
    var config = readYaml.sync('config.yml');

    var url = config.endpoint.api;
    if (!url) {
      context.fail("No url found for application id");
    }
    var parts = URLParser.parse(url);
    var post_data = JSON.stringify(json);

    var headers = {
      'Content-Type': 'application/json',
      'Content-Length': post_data.length,

    };
    for (var header in
        config.endpoint.headers) {
      headers[header] = config.endpoint.headers[header];
    }

    // An object of options to indicate where to post to
    var post_options = {
      host: parts.hostname,
      auth: parts.auth,
      port: (parts.port || 80),
      path: parts.path,
      method: 'POST',
      headers: headers
    };

    var req = http.request(post_options, function (res) {
      var body = "";
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        context.succeed(JSON.parse(body));
      });
    });
    req.on('error', function (e) {
      context.fail('problem with request: ' + e.message);
    });

    req.write(post_data);
    req.end();
  } catch (e) {
    context.fail("Exception: " + e);
  }
};
