const userController = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", userController.addUsers);
router.get("/display", userController.getAllUsers);

module.exports = router;