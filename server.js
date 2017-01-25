  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(express.static(__dirname + '/public'));

  /* - - - HTML Endpoints - - - */
  app.get('*', function homepage (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
  });


  /* - - - Server linstening to port 3000 - - - */
  app.listen(process.env.PORT || 3000, function () {
    // console.log('Server running on localhost:3000') 
  })
