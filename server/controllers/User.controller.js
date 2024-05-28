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

export{
    getAllUsers,
    createUser,
    getUserById,
}