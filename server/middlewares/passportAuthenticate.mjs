import passport from 'passport';

const passportAuthenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, done) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log("Invalid")
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return next();
        })
    })(req, res, next);
}

export {passportAuthenticate};