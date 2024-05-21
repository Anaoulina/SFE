const Commandliste = require('../models/Commendliste');
const User = require('../models/User');

// Controller function to create a new command
exports.createCommand = async (req, res) => {
    let commends = await Commandliste.find({});
    let user = await User.findById(req.body.iduser)
    if (commends.length > 0) {
        let last_commend = commends[commends.length - 1];
        id = last_commend.id + 1;
    }
    else {
        id = 1;
    }
    try {
        const command = new Commandliste({
            id : id ,
            userdata : user ,
            idproduits :  req.body.idproduits  ,
            iduser :req.body.iduser,
            paiement : req.body.paiement ,
            adresse : req.body.adresse,
            done : false ,
            Tel : req.body.Tel,

        });
        await command.save();
        res.status(201).send(command);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Controller function to get all commands
exports.getCommands = async (req, res) => {
    try {
        const commands = await Commandliste.find();
        res.send(commands);

    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to get a command by ID
exports.getCommandById = async (req, res) => {
    try {
        const command = await Commandliste.findById(req.params.id);
        if (!command) {
            return res.status(404).send();
        }
        res.send(command);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to update a command by ID
exports.updateCommand = async (req, res) => {
    try {
        const command = await Commandliste.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!command) {
            return res.status(404).send();
        }
        res.send(command);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Controller function to delete a command by ID
exports.deleteCommand = async (req, res) => {
    try {
        const command = await Commandliste.findByIdAndDelete(req.params.id);
        if (!command) {
            return res.status(404).send();
        }
        res.send(command);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.getCommandsGroupedByUserIds = async (req, res) => {
    try {
        const commands = await Commandliste.aggregate([
            {
                $group: {
                    _id: "$iduser",
                    commands: { $push: "$$ROOT" }
                }
            }
        ]);
        res.send( commands);
    } catch (error) {
        res.status(500).send(error);
    }
};

