const express = require('express');
const passport = require('passport');
const GoogleStrategey = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategey());


// app.get('/', (req, res) => {
//
//     res.send({hi: 'there'});
//
// });
//

const PORT = process.env.PORT || 5000;

app.listen(PORT);
