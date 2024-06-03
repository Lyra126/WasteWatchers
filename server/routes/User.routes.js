import express from 'express';
import { createUser, getAllUsers, getUserById, getUserByEmailAndPassword} from '../controllers/User.controller.js';

const router = express.Router();

router.route('/getAll').get(getAllUsers);
router.route('/create').post(createUser);
router.route('/user').get(getUserById);
router.route('/get').get(getUserByEmailAndPassword);

export default router;