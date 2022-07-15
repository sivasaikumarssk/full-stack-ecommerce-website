const express = require('express');
const Carts = require("../models/cart.model");


const router = express.Router();

router.post("", async (req, res) => {
    try {
        console.log(req.body._id)       
         const product = await Carts.create({id:req.body._id});
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("", async (req, res) => {
    try {

        const product = await Carts.find().populate("id").lean().exec();
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports = router