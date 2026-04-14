function authMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        res.status(403).send({
            message: "You are not logged in"
        });
        return;

    }

    const decoded = jwt.verify(token, "trello12134password")
    const username = decoded.userId;

    if (!userId) {
        res.status(403).json({
            message: "malformed token"
        })
        return;
    }
    req.username = username;

    next();
}

module.exports = {
    authMiddleware
}