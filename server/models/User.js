import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    tree_stage: { type: Number, required: true },
    current_user_points: { type: Number, required: true },
    food_waste_saved: { type: Number, required: true },
    compost_made: { type: Number, required: true },
    saved_locations: { type: [String], required: true },
    email_address: { type: String, required: true }
}); 

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
