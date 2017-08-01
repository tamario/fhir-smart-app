const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const indexPath = path.join(__dirname, 'index.html');
const launchPath = path.join(__dirname, 'launch.html');

app.get('/', function (_, res) {
    res.sendFile(indexPath)
});

app.get('/launch', function (_, res) {
    res.sendFile(launchPath)
});

app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});