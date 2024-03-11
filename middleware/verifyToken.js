const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const {token} = req.cookies; // Assuming you store the token in a cookie
    console.log("tokeneeeeeeeeeee",token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        req.user = decoded.data; // You can access the user data in the route handlers

        next(); // Call the next middleware or proceed to the route handler
    });
};

module.exports = verifyToken;