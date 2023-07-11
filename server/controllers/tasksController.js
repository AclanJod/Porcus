const db = require("../models/connection");

const Tasks = db.tasks;

//controller actions
const addTasks = async (req, res) => {
    try {
        const { id, task_name, task_status } = req.body;

        //create new task record
        const tasks = await Tasks.create({
            id,
            task_name,
            task_status,
        });

        res.status(201).json({ tasks });
    } catch(error) {
        console.log("error adding task " + error);
        res.status(500).json({ message: "failed to add task" });
    }
};

const getAllTasks = async (req, res) => {
    try {
        //retrieve all task records
        const tasks = await Tasks.findAll();

        res.status(200).json({ tasks })
    } catch (error) {
        console.error("Error fetching tasks: ", error);
        res.status(500).json({ message: "Failed to fetch taks." });
    }
};

module.exports = {
    addTasks,
    getAllTasks
}