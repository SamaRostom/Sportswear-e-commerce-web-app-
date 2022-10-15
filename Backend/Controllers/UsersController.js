const {UsersService} = require("../service/UserService");


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


module.exports = {
    login,
    register
}