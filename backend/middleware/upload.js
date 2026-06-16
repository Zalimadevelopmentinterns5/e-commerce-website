const multer = require("multer");
const path = require("path");

const userStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/users");
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const productStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/products");
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const uploadUser = multer({storage:userStorage});
const uploadProduct = multer({storage:productStorage});

module.exports = {
    uploadUser,
    uploadProduct
};
