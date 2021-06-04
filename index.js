const express = require('express');
const router = require('./routes')
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const knex = require('./db/knexfile');
const bcrypt = require('bcryptjs');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(expressLayouts)

//static file

app.use(express.static('public'))
app.use('./css', express.static(__dirname + 'public/css'))
app.use('./js', express.static(__dirname + 'public/js'))

router.use('/edit', express.static(path.join(process.cwd(), 'public')));
router.use('/user', express.static(path.join(process.cwd(), 'public')));
router.use('/user/page', express.static(path.join(process.cwd(), 'public')));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(9000, ()=> console.log('server listening on port 1000'))