import express from 'express';
import { createUser, getAllUsers, getUserById} from '../controllers/User.controller.js';

const router = express.Router();

router.route('/getAll').get(getAllUsers);
router.route('/create').post(createUser);
router.route('/user').get(getUserById);

export default router;