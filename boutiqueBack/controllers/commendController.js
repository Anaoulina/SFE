const Commands = require('../models/Commands');
const User = require('../models/User');
const mongoose = require("mongoose");

exports.getAllCommands = async (req, res) => {
    let commandes = await Commands.find({});
    console.log("All Command Fetched");
    res.send(commandes);
};

exports.addCommend = async (req, res) => {
    let commends = await Commands.find({});
    let id;
    let userData = await User.findOne({ _id: req.user.id });
    if (commends.length > 0) {
        let last_commend = commends[commends.length - 1];
        id = last_commend.id + 1;
    }
    else {
        id = 1;
    }
    const commend = new Commands({
        id: id,
        imagePersonalisade: req.body.imagePersonalisade,
        price: req.body.price,
        height: req.body.height,
        produit: req.body.produit,
        user: userData,
        Width : req.body.Width,
        price : req.body.price,
        done : false ,
        quantity : req.body.quantity ,
        
    });
    await commend.save();
    console.log('Saved');
    res.json({
        success: true,
        id: id,
        name: req.body.name
    })
};

exports.getCommandsByUserId = async (req, res) => {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    try {
        const commands = await Commands.find({ "user._id": userId, done: false });
        res.send(commands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getCommandsById = async (req, res) => {
    //const userId = new mongoose.Types.ObjectId(req.user.id); 
    const { id } = req.params;
    try {
        const commands = await Commands.find({ "id": id });
        //console.log(commands.length);
        res.send(commands);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.removeCommandes = async (req,res) => {
    await Commands.findOneAndDelete({id : req.body.id});
    console.log("Removed");
    res.json({
        success : true , 
    })
};

exports.editedonecommend = async (req, res) => {
    try {
        const command = await Commands.findById(req.params.id);
        if (!command) {
            return res.status(404).send();
        }
        console.log('Request body:', req.body);
        command.done = req.body.done;

        await command.save();
        res.send(command);
    } catch (error) {
        console.error('Error updating command:', error);
        res.status(400).send(error);
    }
};