const validateSession = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    }
    return res.redirect('/login');
}

export {validateSession}