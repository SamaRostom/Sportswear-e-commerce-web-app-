const {find, findOne} = require("../DataBase/Base");
const {Product} = require("../DataBase/Product");

class ProductService {


    async list(user, page, limit) {

        //if (!user || user == "guest")
        //    return [{name: "only 1 "}]
        let product = new Product();
        return await product.find()
    }

    async one(name) {
        let product = new Product();
        return await product.findOne(name)
    }

    async update(id, params) {
        let product = new Product();
        return await product.update(id, params)
    }

    async delete(id) {
        let product = new Product();
        return await product.delete(id)
    }

    async getspecific(filter) {

        //if (!user || user == "guest")
        //    return [{name: "only 1 "}]
        let product = new Product();
        return await product.find(filter)
    }
}




module.exports = {
    ProductService
}
