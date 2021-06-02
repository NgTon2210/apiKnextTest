var express = require('express');
const router = require('./routes')
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser');
var knex = require('./db/knexfile');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(expressLayouts)
//static file

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(9000, ()=> console.log('server listening on port 1000'))