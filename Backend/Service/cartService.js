const { find, findOne } = require("../DataBase/Base");
const { cart } = require("../DataBase/cart");
class CartService {


    async list(user, page, limit) {
        let Cart = new cart();
        return await Cart.find()
    }

    async one(id) {
        let Cart = new cart();
        return await Cart.findcart(id)
    }
    async update(id, params) {
        let Cart = new cart();
        return await Cart.update(id, params)
    }
    async updateadd(id, params) {
        let Cart = new cart();
        return await Cart.updateadd(id, params)
    }
    async delete(id) {
        let Cart = new cart();
        return await Cart.delete(id)
    }

}

module.exports = {
    CartService
}