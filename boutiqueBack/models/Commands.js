const mongoose = require("mongoose");

const Commands = mongoose.model("Commands" , {
    id : {
        type : Number , 
        require : true ,
    },
    produit : {
        type : Object ,
        require : true ,
    },
    user : {
        type : Object ,
        require : true ,
    },
    price : {
        type : Number,
        require : true ,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    imagePersonalisade : {
        type : String , 
    },
    quantity :{
        type : Number , 
    },
    height : {
        type : Number ,
    },
    Width : {
        type : Number ,
    },
    done : {
        type : Boolean,
    },
    
    


});

module.exports = Commands ;