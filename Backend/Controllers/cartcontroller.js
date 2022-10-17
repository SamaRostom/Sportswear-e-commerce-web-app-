const { CartService } = require("../Service/cartService");
const { insertOne } = require("../DataBase/Base");
const { cart } = require("../DataBase/cart");
const { Product } = require("../DataBase/Product");
const { ProductService } = require("../Service/ProductService");
const { ObjectId } = require("mongodb");
class CartController {

    async create(req, res) {
        let Cart = new cart();
        const user = req.user;

        await Cart.insertOne({
            "user_id": user._id,
            "items": [],
        });

        res.json({
            message: "cart created successfully"
        });
    }
    async qyt(req, res) {
        const user = req.user;
        const pid = req.params.pid;

        let cservice = new CartService()
        let car = await cservice.one(user._id)
        let array = car.items
        let result
        for (let i = 0; i < array.length; i++) {
            if (array[i].item._id == pid) {

                result = i
            }
        }
        res.json({
            qyt: car.items[result].qyt

        });

    }
    async add(req, res) {

        const user = req.user;
        const pid = req.params.pid;
        let pservice = new ProductService();
        let product = await pservice.one(pid)
        let cservice = new CartService()
        let car = await cservice.one(user._id)
        let array = car.items
        let flag = false
        let result
        for (let i = 0; i < array.length; i++) {
            if (array[i].item._id == pid) {
                flag = true;
                result = i
            }
        }
        if (flag) {
            let quantity = car.items[result].qyt
            car.items[result].qyt = quantity + 1;
        }
        else {
            car.items.push({ "item": product, "qyt": 1 })
        }



        res.json({
            car: await cservice.updateadd(user._id, car)

        });
    }

    //  car.items.push({ "item": product, "qyt": 1 })
    async inc(req, res) {
        const user = req.user;
        const { pid } = req.params;
        let cservice = new CartService()
        let car = await cservice.one(user._id)
        let array = car.items
        let result;
        for (let i = 0; i < array.length; i++) {
            if (array[i].item._id == pid) {
                result = i;
            }
        }
        let quantity = car.items[result].qyt
        car.items[result].qyt = quantity + 1;

        res.json({
            car: await cservice.updateadd(user._id, car)
        });
    }
    async dec(req, res) {
        const user = req.user;
        const pid = req.params.pid;
        let cservice = new CartService()
        let car = await cservice.one(user._id)
        let array = car.items
        let result;
        for (let i = 0; i < array.length; i++) {
            if (array[i].item._id == pid) {
                result = i;
            }
        }

        let quantity = car.items[result].qyt
        if (quantity == 1) {
            let pservice = new ProductService();
            let product = await pservice.one(pid);
            car.items.pop(product)
            cservice.updateadd(user._id, car)
            return
        }
        car.items[result].qyt = quantity - 1;

        res.json({
            car: await cservice.updateadd(user._id, car)
        });
    }
    async remove(req, res) {
        const user = req.user;
        const pid = req.params.pid;
        let pservice = new ProductService();
        let product = await pservice.one(pid)
        let cservice = new CartService()
        let car = await cservice.one(user._id)

        car.items.pop(product)
        res.json({
            car: await cservice.updateadd(user._id, car)

        });
    }
    async shipping(req, res) {
        const user = req.user;
        let service = new CartService()
        let cart = await service.one(user._id)
        let pc = 0;
        if (cart.items == null) { return }
        let array = cart.items
        for (var i = 0; i < array.length; i++) {
            pc += array[i].item.price * array[i].qyt;
        }
        let ship = pc * 0.1
        res.json({
            ship
        });

    }
    async subtotal(req, res) {
        const user = req.user;
        let service = new CartService()
        let cart = await service.one(user._id)
        let pc = 0;
        if (cart.items == null) { return }
        let array = cart.items
        for (var i = 0; i < array.length; i++) {
            pc += array[i].item.price*(1-array[i].item.discount) * array[i].qyt;
        }

        res.json({
            pc
        });
    }


    async total(req, res) {
        const user = req.user;
        let service = new CartService()
        let cart = await service.one(user._id)
        let pc = 0;
        if (cart.items == null) { return }
        let array = cart.items
        for (var i = 0; i < array.length; i++) {
            pc += array[i].item.price * array[i].qyt;
        }
        let ship = pc * 0.1
        let total = pc + ship
        res.json({
            total
        });
    }
    async viewOne(req, res) {
        const user = req.user;
        let service = new CartService();
        let cart = await service.one(user._id)
        if (cart.items == null) { return }
        let items = cart.items
        res.json({
            items
        });
    }
    // async viewOne(req, res) {
    //     const id = req.params.id;
    //     let service = new CartService();
    //     let car = await service.one(id)
    //     let items = car.items
    //     res.json({
    //         items
    //     });
    // }
}

module.exports = {
    CartController
}