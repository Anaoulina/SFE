const User = require('../models/User');
const Commands = require('../models/Commands');
const jwt = require("jsonwebtoken");


exports.signup = async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, error: "existing users fond with this email" })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
};

exports.login = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, error: "Wrong Password" });
        }
    }
    else {
        res.json({ success: false, errors: "Wrong Email" })
    }
};




exports.addToCart = async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.user.id });
        userData.cartData[req.body.itemId] += 1;
        await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        res.json({ message: "Added To Cart" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        let userData = await User.findOne({ _id: req.user.id });
        if (userData.cartData[req.body.itemId] > 0) {
            userData.cartData[req.body.itemId] -= 1;
            await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
            res.json({ message: "Removed from Cart" });
        } else {
            res.status(400).json({ message: "Item not in cart" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCartData = async (req, res) => {
    try {
        
        let userData = await User.findOne({ _id: req.user.id });
        res.json(userData.cartData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

