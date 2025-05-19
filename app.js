// Dashtreme – Free Bootstrap 4 HTML5 Admin Dashboard Template
const express = require('express');
const route = require('./router');
const app = express()
// const expresslayout =require('express-ejs-layouts');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flieupolad = require('express-fileupload');

const dbUrl = 'mongodb://localhost:27017/commingsoon';
mongoose.connect(dbUrl,{ useNewUrlParser: true , useUnifiedTopology: true})

const eSession=require('express-session')
var MongoDBStore = require('connect-mongodb-session')(eSession);

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store:new MongoDBStore({ uri:dbUrl, collection:'session'}),
    resave: true,
    saveUninitialized: true
  }));
  
// app.use(expresslayout);
// app.set('layout','layout/applayout');
app.use(flieupolad());        
app.use(bodyParser.json());//parsing os application/json type post data
app.use(bodyParser.urlencoded({extended: true})); // support parsing of application /x-www-form-urlencoded post 

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files

app.use('/', route)


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});