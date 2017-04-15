const express = require('express');
const app = express();

app.listen(3000, (req, res) => {
    console.log('listening on 3000')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/charts', (req, res) => {
    res.sendFile(__dirname + '/charts.html');
});

app.get('/tables', (req, res) => {
    res.sendFile(__dirname + '/tables.html');
});

app.use('/public', express.static('public'));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/404.html');
});
