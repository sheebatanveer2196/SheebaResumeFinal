var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var exphbs = require('express-handlebars')

var app = express();
var port = 8040

app.set('view engine', 'hbs')

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images/assests'));

// Setting template Engine

// app.get('/', (req, res) => {
//     //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
//     res.render('home');
//     });
// port where app is served
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;


var indexRouter = require('./routes/index');
var skillRouter = require('./routes/mySkills');
var contactRouter = require('./routes/contact');
var projectRouter = require('./routes/project');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);
app.use(skillRouter);
app.use(contactRouter);
app.use(projectRouter);


// app.use('/users', usersRouter);