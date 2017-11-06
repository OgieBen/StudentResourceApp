const express = require('express');
const app = express();
const path = require('path');




// Run the app by serving the static files
// in the dist directory
//app.use(express.static(__dirname+'/dist'));

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

 var val = path.join( __dirname+'/dist/index.html');
app.get('/*', function(req, res) {
  res.json({
    path: val
  });
  // res.sendFile(path.join(__dirname+'/dist/index.html'));
});

var port = 5911;
app.listen(process.env.PORT || port, function(){
    console.log("Server started at port "+ port);
});


/* 
should be added to package.json
then run
npm deploy
  "scripts": {
    // ...
    "deploy": "git push origin master && git push heroku master"
  }, */