const express = require("express");
const db = require("mongodb");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser");
const { PORT } = require("./configure")
const { list, viewOne, create, update, deleteproduct, addRate, topselling, onsale, newProducts, GetByCategory } = require("./Controllers/productController");
const { storage } = require("./MiddleWare/productMiddleWare");
const { createorder } = require("./Controllers/OrdersController");
const { login, register,getuser} = require("./Controllers/UsersController");
const { CartController } = require('./Controllers/cartcontroller')
const { isuser } = require('./MiddleWare/AuthMiddleware')
const {listMessage,sendMessage} = require("./Controllers/ContactSController")
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
app.get("/onsale", onsale);
// get products by category
app.get("/getproducts/:category", GetByCategory);

//--------------- User Routes ------------------------//
// register user
app.post("/auth/register",register)
// login user
app.post("/auth/login",login)
// get user data by token.id
app.get("/getuser", isuser,getuser);
//------------------ order Routes ---------------------//
// create order with cart data when checkout is done
app.post("/order",createorder)

//----------------- Contact Routes --------------------//
app.post("/sendMessage",sendMessage)
app.get("/listMessages" , listMessage)

//--------------- cart Routes ------------------------//
app.post('/cart/create', CartControllers.create)
app.get('/cart/add/:pid', isuser, CartControllers.add)
app.get('/cart/inc/:pid', isuser, CartControllers.inc)
app.get('/cart/qyt/:pid', isuser, CartControllers.qyt)
app.get('/cart/dec/:pid', isuser, CartControllers.dec)
app.get('/cart/remove/:pid', isuser, CartControllers.remove)
app.get("/cart", isuser, CartControllers.viewOne);
app.get('/cart/price', isuser, CartControllers.subtotal);
app.get("/cart/ship", isuser, CartControllers.shipping);
app.get("/cart/totalprice", isuser, CartControllers.total);






// listening on port 3000
app.listen(PORT, () => { console.log("server is listening: " + PORT) })
