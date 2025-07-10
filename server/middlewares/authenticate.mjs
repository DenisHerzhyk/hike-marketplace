import jwt from 'jsonwebtoken';

const authenticate = (app) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Access denied');
    }
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if (err) {
            res.status(403).send('Issue inside token');
        }
        req.user = user;
        next();
    });
}

export {authenticate};