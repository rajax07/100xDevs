const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.token; // jwt

    const decoded = jwt.verify(token, "trello12134password");
    const userId = decoded.userId;
    if (userId) {
        req.userId = userId;
        next();
    } else {
        res.status(403).json({
            message: "Token was incorrect"
        })
    }
}

module.exports = {
    authMiddleware: authMiddleware
}



// After a user signs up with a username and password, they sign in using the same credentials.
// When the credentials are correct, the server creates a JWT token that contains the user's identity, usually the userId.

// Later, when the user sends another request, they include that token in the request headers.

// The auth middleware then:

// takes the token from the headers
// verifies the token using jwt.verify()
// decodes the token payload
// extracts the original userId stored inside the token
// attaches it to the request object:
// req.userId = userId;

// This allows the next middleware or route handler to know which authenticated user made the request without asking for username and password again.
// timespan 01:06 to check in the video

// The auth middleware verifies the JWT token, extracts the userId, attaches it to req.userId, and then calls next(). After that, the protected routes can access the authenticated user's ID using req.userId.
// todos and todo protected routes get access to userId through req.userId