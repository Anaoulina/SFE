const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        available : req.body.available,
        descreption : req.body.descreption,
        height : req.body.height ,
        width : req.body.width ,
        personalised : req.body.personalised,
        souscategorie:req.body.souscategorie,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
};

exports.removeProduct = async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
};

exports.getAllProducts = async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
};

exports.editProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { id: id },
            {
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
                available : req.body.available,
                descreption : req.body.descreption,
                height : req.body.height ,
                width : req.body.width ,
                personalised : req.body.personalised,
                souscategorie : req.body.souscategorie,
                sales : req.body.sales ,
            },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        return res.status(200).json({ success: true, updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({id : id});
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        return res.status(200).json({ success: true, product });
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


