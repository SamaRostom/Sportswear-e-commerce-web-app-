const {find, findOne} = require("../DataBase/Base");
const {Order} = require("../DataBase/Order");

class OrderService {


    async list() {
        let order = new Order();
        return await order.find()
    }
    async one(name) {
        let order = new Order();
        return await order.findOne(name)
    }

    async update(id, params) {
        let order = new Order();
        return await order.update(id, params)
    }

    async delete(id) {
        let order = new Order();
        return await order.delete(id)
    }

    async getspecific(filter) {

        
        let order = new Order();
        return await order.find(filter)
    }
}

module.exports = {
    OrderService
}
