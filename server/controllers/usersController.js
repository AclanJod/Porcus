const db = require("../models/connection");

const Users = db.users;

//controller actions
const addUsers = async (req, res) => {
    try {
        const { id, user_name, email, pass_word } = req.body;

        //create a new user record
        const users = await Users.create({
            id,
            user_name, 
            email,
            pass_word,
        });

        res.status(201).json({ users });
    } catch(error) {
        console.log("error adding the user " + error);
        res.status(500).json({ message: "failed to add the user" });
    }
};

const getAllUsers = async (req, res) => {
    try {
        //retrieve all users records
        const users = await Users.findAll();

        res.status(200).json({ users })
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500).json({ message: "Failed to fetch users." });
    }
};

module.exports = {
    addUsers,
    getAllUsers
}