const {OrderService} = require("../service/OrderService");
const {Order} = require("../DataBase/Order");
const {PORT} = require("../configure")
var jwt = require('jsonwebtoken');



const createorder = async (req, res)=>{
    let order = new Order();
    let token = req.headers["authorization"]
    let decode = jwt.verify(token, 'shhhhh')
    let data =req.body;
    let cartdata= await order.findcart(decode.id);
    console.log(cartdata)
    data.userid = cartdata.user_id;
    data.items=cartdata.items
    data.status="confirmed"
    await order.insertOne(data);
    res.json(
        "order created successfully"
    );
    }



module.exports = {
    
    createorder

}