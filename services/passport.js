const passport = require('passport');
const GoogleStrategey = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
     
     done(null, user.id);

});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
         done(null, user);
    });
});


passport.use(new GoogleStrategey({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshtoken, profile, done) => {

        //console.log('profile', profile);

        User.findOne({
            googleId: profile.id
        }).then((existingUser) => {
              if(existingUser){
                  console.log('user already exists');
                  done(null, existingUser);
              } else{
                new User({
                        googleId: profile.id
                    }).save().then((userSaved) => {
                        done(null, userSaved);
                    });
        //console.log('done', done);
              }
        })

    
}));