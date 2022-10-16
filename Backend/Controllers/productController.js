const { ProductService } = require("../service/ProductService");
const { insertOne } = require("../DataBase/Base");
const { Product } = require("../DataBase/Product");
const { PORT } = require("../configure")

const list = async (req, res) => {
    let service = new ProductService();
    let list = await service.list(req.user, req.page, 10)
    res.json(
        list
    );
}


const viewOne = async (req, res) => {
    const name = req.params.name;
    let service = new ProductService();
    res.json(
        await service.one(name)

    );
}

const create = async (req, res) => {

    let product = new Product();
    let data = req.body;
    data.imagePath = `http://localhost:${PORT}/images/` + req.file.filename;
    data.rate = 0.0;
    data.nratings = 0;
    nsale = 0;
    await product.insertOne(data);
    res.json(
        "product created successfully",
    );
}



const update = async (req, res) => {


    const { id } = req.params;
    const { discount, price } = req.body;
    let service = new ProductService();
    res.json(
        await service.update(id, { discount, price })
    );
}

const deleteproduct = async (req, res) => {
    const { id } = req.params;
    let service = new ProductService();
    await service.delete(id)
    res.json(
        "product deleted successfully"
    );
}

const addRate = async (req, res) => {

    const { id } = req.params;
    let { rate } = req.body;

    let service = new ProductService();
    let originaldata = await service.one(id);
    if (!product)
        res.statusCode(400).json({
            message: "product not found"
        });
    rate = (rate + originaldata.rate) / (originaldata.nratings + 1)
    let nratings = originaldata.nratings + 1;
    res.json(
        await service.update(id, { rate, nratings })

    );
}


const topselling = async (req, res) => {
    let service = new ProductService();
    let products = await service.list(req.user, req.page, 10)

    let topSell = products.filter(v => v.nsale >= 10)
    res.json(
        topSell
    );
}

const newProducts = async (req, res) => {
    let service = new ProductService();
    let products = await service.list(req.user, req.page, 10)

    let newlyAdded = products.filter(v => v.nratings <= 0)
    res.json(
        newlyAdded
    );
}

const onsale = async (req, res) => {
    let service = new ProductService();
    let products = await service.list(req.user, req.page, 10)

    let Sale = products.filter(v => v.discount >= 0.3)
    res.json(
        Sale
    );
}


const GetByCategory = async (req, res) => {
    let service = new ProductService();
    let products = await service.list(req.user, req.page, 10)
    let { category } = req.params
    let p = products.filter(v => v.category == category)
    res.json(
        p
    );
}

module.exports = {
    list,
    viewOne,
    create,
    update,
    deleteproduct,
    addRate,
    topselling,
    newProducts,
    onsale,
    GetByCategory

}