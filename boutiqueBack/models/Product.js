const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Number,
        // default: true,
    },
    descreption : {
        type : String , 
    }, 
    height : {
        type  : Number , 
        required : true, 
    },
    width : {
        type : Number , 
        required : true ,
    },
    sales : {
        type : Number , 
        default : 0 ,
    },
    souscategorie : {
        type : String ,   
    },
    personalised : {
        type : Boolean ,
        default : false ,
    }
});

module.exports = Product;
