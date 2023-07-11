const taskController = require("../controllers/tasksController");

const router = require("express").Router();

router.post("/addTask", taskController.addTasks);
router.get("/getTask", taskController.getAllTasks);

module.exports = router;