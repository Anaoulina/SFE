const express = require('express');
const router = express.Router();
const { fetchUser } = require('../middleware/authMiddleware');
const commandesControllers = require('../controllers/commendController');

router.get('/commandesAll' , commandesControllers.getAllCommands);
router.post('/addtocommend',fetchUser,commandesControllers.addCommend);
router.post('/commands',fetchUser, commandesControllers.getCommandsByUserId);
router.post('/removeCommand',commandesControllers.removeCommandes);
router.get('/commendbyid/:id',commandesControllers.getCommandsById);
router.patch('/commandeditedone/:id' , commandesControllers.editedonecommend);


module.exports = router ;