const passport = require('passport');
const GoogleStrategey = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')


passport.use(new GoogleStrategey({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshtoken, profile, done) => {

        console.log('access token', accessToken);
        console.log('refresh token', refreshtoken);
        console.log('profile', profile);
        //console.log('done', done);
}));