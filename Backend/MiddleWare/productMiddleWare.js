const multer = require("multer");

const diskstorage=multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,'images');
        }
        ,
        filename:(req,file,cb)=>{
            const mimeType = file.mimetype.split('/');
            const fileType =mimeType[1];
            const fileName = file.originalname;
            cb(null,fileName)
        }
    }
)

const fileFilter = (req,file,cb)=>{
    const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
    allowedMimeTypes.includes(file.mimetype) ? cb(null,true):cb(null,false)
}

const storage = multer({storage:diskstorage,fileFilter:fileFilter})


module.exports = {storage}