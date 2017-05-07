// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

"use strict";

var express = require('express');
var app = express();

//========================================================//
//   Sets port to environment port or local port          //
//========================================================//

var port = process.env.PORT || '4000';

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for more info, see: http://enable-cors.org/server_expressjs.html

//========================================================//
//   statically serves files from the client directory    //
//========================================================//

app.use(express.static('client'));
// This is where our private API is located
app.use(express.static('api'));
app.use(express.static('webview'));

// for more info, see: http://expressjs.com/starter/static-files.html

//========================================================//
//   ROUTES                                               //
//========================================================//

app.get('/', function(req, res) {
  res.location('/client/index.html');
});
//========================================================//
//   Use this to add many mp3s at once to the library     //
//========================================================//
// app.get('/gridtest', function(req, res) {
//   var insert = require('./reqHandler.js').insert;
//   insert();
//   res.send('new copiedDummy.txt file has been created');
// });

//=========================================================================//
//    client retrieves a specific track from the db using the track id     //
//    see render fn in playerView in client/app.js (around line 214)       //
//=========================================================================//

// app.get('/track', function(req, res) {
//   retrieve(req.query.id, res);
// });

//=========================================================================//
//   Automatically populates the library by querying the db                //
//   Library is defined in dbconnection, around line 13                    //
//   see url in LibraryCollection in client/app.js (around line 49)        //
//=========================================================================//
// app.get('/songs', function(req, res) {
//   Library(function(err, data) {
//     if (err) {
//       throw err;
//     } else {
//       res.send(data);
//     }
//   });
// });

//========================================================//
//   Calling the server                                   //
//========================================================//
// var server = app.listen(port, function() {
//   var host = server.address().address;
//   console.log('Example app listening at', host, port);
// });
