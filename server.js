//SPDX-License-Identifier: Apache-2.0

// nodejs server setup 

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var path          = require('path');

// Load all of our middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// instantiate the app
var app = express();

//SPDX-License-Identifier: Apache-2.0

var car = require('./controller.js');

app.get('/', function(req, res) {
    res.json({message: 'App is running!', status: 200});
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname +  '/views/index.html')
});

app.get('/get_car/:id', function(req, res){
    car.get_car(req, res);
});
app.get('/add_car/:car', function(req, res){
    car.add_car(req, res);
});
app.get('/get_all_cars', function(req, res){
    car.get_all_cars(req, res);
});
app.get('/change_owner/:owner', function(req, res){
    car.change_owner(req, res);
});

// Save our port
var port = process.env.PORT || 8000;

// Start the server and listen on port 
app.listen(port,function(){
  console.log("Live on port: " + port);
});
