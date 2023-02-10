const router = require('express').Router()
const userController = require('../controllers/user.controllers')

router.get("/getallusers", userController.getallusers);
router.post("/adduser", userController.adduser);
router.put("/edituser/:userId", userController.edituser);
router.delete("/deleteuser/:userId", userController.deleteuser);


module.exports = router