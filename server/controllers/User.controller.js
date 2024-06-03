import UserModel from "../models/User.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const getUserByEmailAndPassword = async (req, res) => {
    try {
        const { email, password } = req.query;
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

const createUser = async (req, res) => {
    try {
        const user = new UserModel({ 
            id: req.body.id,
            user: req.body.user,
        })
        await user.save();
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const getUserById = async (req, res) => {};

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await UserModel.findOne({ email_address: email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

export{
    getAllUsers,
    createUser,
    getUserById,
    getUserByEmailAndPassword,
    getUserByEmail
}