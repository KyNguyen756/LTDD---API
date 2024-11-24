const User = require("../models/userModel");

const userController = {

    getuser: async (req, res) => {
        try {
            const Users = await User.find(); 
            res.status(200).json(Users); 
        } catch (err) {
            res.status(500).json(err);
        }
    },

    addUser: async (req, res) => {
        try{
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const Update = req.body;
            const updatedUser = await User.findByIdAndUpdate(id, Update, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ message: 'User updated:', updatedUser });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ message: 'User deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = userController;