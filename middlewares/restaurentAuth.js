
const jwt = require('jsonwebtoken');
 
const restaurentAuth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to restaurent token' });
        }
        req.userId = decoded.id; 
        next();
    });
};

module.exports = { restaurentAuth };