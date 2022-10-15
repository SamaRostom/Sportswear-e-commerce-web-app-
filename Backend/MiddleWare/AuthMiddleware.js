const {UsersService} = require("../service/UserService");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


async function isuser(req, res, next) {

    if (req.path == "/auth/register" || req.path == "/auth/login")
        return next();


    let token = req.headers["authorization"]

    let decode = jwt.verify(token, 'shhhhh')

    let userS = new UsersService
    let user = await userS.findById(decode.id);

    if (!user)
        return res.status(401).json({message: "unauthorized"})
    req.user = user;
    next();
}

module.exports = {
    isuser
}
