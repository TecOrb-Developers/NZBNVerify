require('./config/config');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const router = express.Router();
app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const http = require('http').Server(app);


//Business
const businessRoute = require('./config/routes/business');
app.use('/api/v1/business', businessRoute);



var server = http.listen(port, () => {

    console.log('NZBN server is running on development port ' + port);

});