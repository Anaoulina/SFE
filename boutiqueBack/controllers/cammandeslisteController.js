const Commandliste = require('../models/Commendliste');
const User = require('../models/User');


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


exports.getCommands = async (req, res) => {
    try {
        const commands = await Commandliste.find();
        res.send(commands);

    } catch (error) {
        res.status(500).send(error);
    }
};


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

exports.updateCommand = async (req, res) => {
    try {
        const command = await Commandliste.findById(req.params.id);
        if (!command) {
            return res.status(404).send();
        }
        
        // Only update the 'done' field
        command.done = req.body.done;

        await command.save();
        res.send(command);
    } catch (error) {
        res.status(400).send(error);
    }
};



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

