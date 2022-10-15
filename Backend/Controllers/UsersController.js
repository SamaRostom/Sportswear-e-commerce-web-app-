const {UsersService} = require("../service/UserService");
const jwt = require('jsonwebtoken');


const login= async (req, res)=>{

        const {username, password} = req.body;

        let userService = new UsersService;
        let user = await userService.login(username, password)

        res.json(
            user
        );
    }

const register = async (req, res)=>{

        const {username, password ,email } = req.body;

        let userService = new UsersService;
        let user = await userService.register(username, password,email)

        res.json(
            user
        );
    }


const getuser = async (req,res)=>{
    const token = req.headers["authorization"]

    
    let decode = jwt.verify(token, 'shhhhh')

    let userS = new UsersService
    let user = await userS.findById(decode.id);

    res.json(
        user
    );
    
}


module.exports = {
    login,
    register,
    getuser
}