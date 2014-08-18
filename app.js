'use strict';

/**
* Module dependencies.
*/
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes/routes');

//Init
var app = module.exports = express();

//App Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


app.get('/', routes.index);



app.listen(3000);