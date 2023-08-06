const express = require('express');
const app = express();
const connect_db = require('./database/db');

connect_db();

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log('Listening on port ' + port) });
