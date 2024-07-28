import express from 'express';
import { User_Signin,User_Login,get_all_User,Delete_user,get_User_by_id } from '../controller/User_controller.js';
const UserRoutes = express.Router();
UserRoutes.get('/',get_all_User);
UserRoutes.get('/:id',get_User_by_id);
UserRoutes.post('/Signin',User_Signin);
UserRoutes.post('/Login',User_Login);
UserRoutes.delete('/:id',Delete_user);

export default UserRoutes;