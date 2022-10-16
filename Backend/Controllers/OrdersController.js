const {OrderService} = require("../service/OrderService");
const {insertOne} = require("../DataBase/Base");
const {Order} = require("../DataBase/Order");
const {PORT} = require("../configure")

var jwt = require('jsonwebtoken');



const createorder = async (req, res)=>{
    let order = new Order();
    let token = req.headers["authorization"]
    let decode = jwt.verify(token, 'shhhhh')
    let cartdata=order.findcart(decode.id);
    console.log(decode.id)

    let data =req.body
    data.userid = cartdata.userid;
    data.itemems=cartdata.Items
    data.status="confirmed"
    await order.insertOne(data);
    res.json(
        "order created successfully",
    );
    }


const update =async(req, res)=>{

    const {id} = req.params;
    const {discount,price} = req.body;
    let service = new ProductService();
    res.json(
        await service.update(id, {discount, price})
    );
}

const deleteOrder = async (req, res) =>{
    const {id} = req.params;
    let service = new ProductService();
    await service.delete(id)
    res.json(
        "product deleted successfully"
    );
    }


const GetByUser =  async (req,res)=>{
    let service = new ProductService();
    let products = await service.list(req.user, req.page, 10)
    let {category} = req.params    
    let p=products.filter(v=> v.category ==category)
    res.json(
        p
    );
}

module.exports = {
    
    createorder,
    update,
    GetByUser,
    deleteOrder

}