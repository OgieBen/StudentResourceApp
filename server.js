var express = require('express');
var app = express();
var path = require('path');

var fs = require('fs');


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname+'/dist'));

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
/* const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}






// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL()); */

// Start the app by listening on the default
// Heroku port
console.log('this is bools: ' );

var val = path.join(__dirname + '/dist');
console.log(val);

app.get('/*', function (req, res) {

  var bools = false;
  (function() {
    fs.stat(val, function (err, stats) {
      if (stats.isDirectory) {
        bools = true;
        console.log('this is bools: ' + bools);
        //  return true;
      }
      //  return false;
    });
  })();


  console.log(bools)

  // res.json({
  //   path: "" + bools //path.resolve(fs.isDir('/dist'))
  // });
  res.sendFile(__dirname+'/dist/index.html');
});

var port = 9910;
app.listen(process.env.PORT || port, function () {
  console.log("Server started at port " + port);
});


/* 
should be added to package.json
then run
npm deploy
  "scripts": {
    // ...
    "deploy": "git push origin master && git push heroku master"
  }, */