const mongoose = require("mongoose"); 

const Commandliste = mongoose.model("Commandliste" , { 
    id : {
        type : Number , 
        require : true ,
    },
    idproduits : {
        type: Object,
    },
    iduser : {
        type : Object,
    },
    userdata : {
        type : Object ,
    },
    paiement : {
        type : Number,
    },
    adresse : {
        type : String ,
    },
    done : {
        type : Boolean ,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    Tel : {
        type : String , 
    },
    
   
}) ;


module.exports = Commandliste ;