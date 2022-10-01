const passport = require('passport')
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const { jwtSecret } = require("../config/variables");
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/Users')
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : jwtSecret
},
 async function (jwtPayload, done) {
   try {
     const user = await User.findById(jwtPayload.sub);
     return done(null, user);
   } catch (err) {
     return done(err);
   }
}
))