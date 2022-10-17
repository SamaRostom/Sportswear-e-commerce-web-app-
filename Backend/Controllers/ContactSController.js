const { ContactService } = require("../service/ContactService");
const { insertOne } = require("../DataBase/Base");
const { contact } = require("../DataBase/contact");
const { PORT } = require("../configure")

const listMessage = async (req, res) => {
    let service = new ContactService();
    let list = await service.list(req.user, req.page, 10)
    res.json(
        list
    );
}

const sendMessage = async (req, res) => {

    let contactt = new contact();
    let data = req.body;
    await contactt.insertOne(data);
    res.json(
        "message sent successfully",
    );
}


module.exports = {
    listMessage,
    sendMessage
    
}