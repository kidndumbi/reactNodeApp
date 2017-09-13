const express = require('express');

const app = express();


app.get('/', (req, res) => {

    res.send({hi: 'there'});

});

app.get('/greedo', (req, res) => {

    res.send({greedo: 'I shot first'});

});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
