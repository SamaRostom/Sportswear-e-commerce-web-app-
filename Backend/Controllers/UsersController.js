const { UsersService } = require("../service/UserService");
const { cart } = require("../DataBase/cart");
const jwt = require('jsonwebtoken');


const login = async (req, res) => {

    const { username, password } = req.body;

    let userService = new UsersService;
    let user = await userService.login(username, password)

    res.json(
        user
    );
}

const register = async (req, res) => {

    const { username,email,password } = req.body;

    let userService = new UsersService;
    let user = await userService.register(username, email,password)
    let Cart = new cart();
    let usr = await userService.finduser(username)
    await Cart.insertOne({
        "user_id": usr._id,
        "items": [],
    });
    res.json(
        user
    );
}


const getuser = async (req, res) => {
    const token = req.headers["authorization"]


    let decode = jwt.verify(token, 'shhhhh')

    let userS = new UsersService
    let user = await userS.findById(decode.id);

    res.json({
        "username": user.username,
        "email": user.email
    });

}


module.exports = {
    login,
    register,
    getuser
}