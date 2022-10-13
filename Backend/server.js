const express = require("express");
const db = require("mongodb");
const path = require("path");
const cors = require("cors")
const bodyParser = require("body-parser");
const {PORT} = require("./configure")
const {list,viewOne,create,update,deleteproduct,addRate,topselling,onsale,newProducts} = require("./Controllers/productController");
const {storage} = require("./MiddleWare/productMiddleWare");
const {login,register} = require("./Controllers/UsersController");

const app = express();

//Global Middlewares
app.use(bodyParser.json())
app.use('/images',express.static(path.join('images')));
app.use(cors())

//--------------------------- Products Routes --------------------//
//create
app.post("/product",storage.single(),create);
//update
app.put("/product/:id", update);
// get product by id
app.get("/product/:name", viewOne);
//list
app.get("/product", list);
//delete
app.delete("/product/:id", deleteproduct);
//add rate
app.put("/addrate/:id",addRate)
// get topselling
app.get("/topselling",topselling)
// get new products
app.get("/new", newProducts);
// get onsale products
app.get("/onsale",onsale)

//--------------- User Routes ------------------------//

app.post("/login", login);
app.post("/register", register);







// listening on port 3000
app.listen(PORT ,()=>{console.log("server is listening:"+PORT)})