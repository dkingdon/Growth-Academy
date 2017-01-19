  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');

  app.use(express.static(__dirname + '/public'))
  app.use(bodyParser.urlencoded({ extended: false}));

  /* - - - HTML Endpoints - - - */
  app.get('*', function homepage (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
  });
  //TODO: Make sure and add all front end routes once created and remove the asterisk above before production (should be a foward slash)




  /* - - - Server linstening to port 3000 - - - */
  app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on localhost:3000') //TODO: romove before produciton
  })
