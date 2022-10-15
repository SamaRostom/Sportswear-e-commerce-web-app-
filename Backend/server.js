const express = require("express");
const db = require("mongodb");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser");
const { PORT } = require("./configure")
const { list, viewOne, create, update, deleteproduct, addRate, topselling, onsale, newProducts } = require("./Controllers/productController");
const { storage } = require("./MiddleWare/productMiddleWare");
const { login, register } = require("./Controllers/UsersController");
const { CartController } = require('./Controllers/cartcontroller')
const { isuser } = require('./MiddleWare/AuthMiddleware')
let CartControllers = new CartController();
const app = express();
//Global Middlewares
app.use(bodyParser.json())
app.use('/images', express.static(path.join('images')));
app.use(cors())

//--------------------------- Products Routes --------------------//
//create
app.post("/product", storage.single(), create);
//update
app.put("/product/:id", update);
// get product by id
app.get("/product/:name", viewOne);
//list
app.get("/product", list);
//delete
app.delete("/product/:id", deleteproduct);
//add rate
app.put("/addrate/:id", addRate)
// get topselling
app.get("/topselling", topselling)
// get new products
app.get("/new", newProducts);
// get onsale products
app.get("/onsale", onsale)
//--------------- User Routes ------------------------//

app.post("/login", login);
app.post("/register", register);

//--------------- cart Routes ------------------------//
app.post('/cart/create', CartControllers.create)
app.put('/cart/add/:pid', isuser, CartControllers.add)
app.post('/cart/inc/:pid', CartControllers.inc)
app.post('/cart/dec/:pid', CartControllers.dec)
app.put('/cart/remove/:pid', isuser, CartControllers.remove)
app.get("/cart/:id", CartControllers.viewOne);
app.post("/cart/price", CartControllers.subtotal);
app.post("/cart/ship", CartControllers.shipping);
app.post("/cart/totalprice", CartControllers.total);
app.post("/auth/register", register)
app.post("/auth/login", isuser, login)




// listening on port 3000
app.listen(PORT, () => { console.log("server is listening:" + PORT) })