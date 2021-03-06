const jwt = require("jsonwebtoken");

const publicRoutes = ["/api/user", "/api/signin", "/api/signup"];

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (publicRoutes.includes(req.url)) {
        return next();
    }

    try {
        if (!authorization) {
            throw new Error("Authorization not exists");
        }

        const [_, token] = authorization.split(" ");
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.headers.loggedUser = payload;

        next();
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports = authMiddleware;