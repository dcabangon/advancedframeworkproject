const express = require("express");
const router = express.Router();

// #1 import in the Product model
const { Product } = require('../models');

router.get('/', async function(req,res){
    let products = await Product.collection().fetch;
})

// router.get('/create', function(req,res){
//     res.send("Creating a new product");
// })

module.exports = router;