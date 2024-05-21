const express = require('express');
const router = express.Router();
const { fetchUser } = require('../middleware/authMiddleware');
const commandesControllers = require('../controllers/commendController');

router.get('/commandesAll' , commandesControllers.getAllCommands);
router.post('/addtocommend',fetchUser,commandesControllers.addCommend);
router.post('/commands',fetchUser, commandesControllers.getCommandsByUserId);
router.post('/removeCommand',commandesControllers.removeCommandes);
router.get('/commendbyid/:id',commandesControllers.getCommandsById);


module.exports = router ;