const UserModel = require("../models/Users")
const { passport } = require("../config/express");

// Passport Strategy
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

  // A passport middleware to handle User login
passport.use(
    'login',
    // eslint-disable-next-line no-undef
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        phoneField: 'phone'
      },
      async (email, password, phone, done) => {
        try {

            const user = await Users.findOne({ $or: [{ email }, { phone }] }).lean();
            if (!user) {
                return res
                    .status(404)
                    .json({ status: false, msg: "Invalid credentials" });
            }
    
            // Matching the passwords to authorize log-in
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res
                    .status(403)
                    .json({ status: false, msg: "Invalid credentials" });
            }
    
            const payload = {
                user: {
                    id: user._id,
                },
            };
            delete user["password"];
            jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: jwtExpirationInterval },
                (err, token) => {
                    if (err) throw err;
                    return res.status(200).json({
                        status: true,
                        msg: "Logged in successfully",
                        token,
                        ...user,
                    });
                }
            );

          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // This verifies that the token sent by the user is valid
passport.use(
    new JwtStrategy(
      {
        secretOrKey: `${secret}`,
  
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      },
      // eslint-disable-next-line consistent-return
      async (token, done) => {
        try {
          // Find the user associated with the email provided by the user
          const user = await UserModel.findOne({
            where: {
              // eslint-disable-next-line object-shorthand
              email: token.email,
            },
          });
          if (!user) {
            // If the user isn't found in the database, return a message
            return done(null, false, { message: 'User not found' });
          }
  
          // Send the user information to the next middleware
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          done(error);
        }
      }
    )
  );