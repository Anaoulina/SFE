const express = require("express");
const router = express.Router();
const commandlisteController = require("../controllers/cammandeslisteController");

router.post("/commandlistes", commandlisteController.createCommand);
router.get("/commandlistes", commandlisteController.getCommands);
router.get("/getcommand/:id", commandlisteController.getCommandById);
router.put("/commandlistes/:id", commandlisteController.updateCommand);
router.delete("/commandlistes/:id", commandlisteController.deleteCommand);
router.get("/commendbyuser",commandlisteController.getCommandsGroupedByUserIds);
module.exports = router;
