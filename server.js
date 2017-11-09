var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.resolve(__dirname+'/dist')));

var port = 9910;
app.listen(process.env.PORT || port,  () => {
  console.log("Server started at port " + port);
});


app.get('/*', (req, res) => {
  
      var index = path.resolve(__dirname+'/dist/index.html');
      console.log(index);
  
      var bools = false;
      (function() {
        fs.stat(index, function (err, stats) {
          if (stats.isFile) {
            bools = true;
            console.log('this is bools: ' + bools);
           
          }
      
        });
      })();
  
    //  res.send('here we are');
     res.sendFile(index);
  })





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

/* 
should be added to package.json
then run
npm deploy
  "scripts": {
    // ...
    "deploy": "git push origin master && git push heroku master"
  }, */