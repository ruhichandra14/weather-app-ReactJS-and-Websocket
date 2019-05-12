const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "384827553835-ni2tbmk0bv8k0stvf8kunnv1ufocv7mj.apps.googleusercontent.com",
            clientSecret: "mNr0ahxNWeg2wNY04uGUrtmv",
            callbackURL: "http://localhost:8080/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};