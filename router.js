const express = require('express');
const homeController = require('./controller/commingController.js')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');


const route = express.Router()

route.get('/', homeController.register)
route.post('/commingsoon', homeController.registerpost)


module.exports = route