import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    tree_type: { type: String, required: true },
    tree_stage: { type: Number, required: true },
    current_points: { type: Number, required: true },
    food_waste: { type: Number, required: true },
    compost_made: { type: Number, required: true },
    saved_locations: { type: [String], required: true },
    email_address: { type: String, required: true },
    name: { type: String, required: true },
    user_name: { type: String, required: true },
    password: { type: String, required: true }
}); 

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
