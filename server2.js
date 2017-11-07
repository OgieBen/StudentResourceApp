var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


app.use(express.static(path.resolve(__dirname+'/dist')));
var port = 9910;
app.listen(process.env.PORT || port, () => 
    {
        console.log('Server started at port: ' + port )
    }
);

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