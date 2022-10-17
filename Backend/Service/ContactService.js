const {find, findOne} = require("../DataBase/Base");
const {contact} = require("../DataBase/contact");

class ContactService {


    async list() {

        let contactt = new contact();
        return await contactt.find()
    }
    async one(name) {
        let contactt = new contact();
        return await contactt.findOne(name)
    }

    async update(id, params) {
        let contactt = new contact();
        return await contactt.update(id, params)
    }

    async delete(id) {
        let contactt = new contact();
        return await contactt.delete(id)
    }
}

module.exports = {
    ContactService
}
