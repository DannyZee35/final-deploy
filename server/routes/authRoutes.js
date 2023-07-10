const express=require('express');
const router=express.Router();
const authController=require('../controller/authController');
const {authMiddleware}=require('../middleware/auth');

const allowedInstructorRoles = ['course instructor'];
const allowedHodRoles = ['head of department'];
const allowedCoordinatorRoles = ['course coordinator'];

router.get('/', authMiddleware(allowedInstructorRoles), authController.home);
router.get('/hod', authMiddleware(allowedHodRoles), authController.hod);
router.get('/cc', authMiddleware(allowedCoordinatorRoles), authController.cc);
router.get('/users', authMiddleware(allowedHodRoles), authController.getAllUsers);
router.put('/users/:id/toggleStatus', authMiddleware(allowedHodRoles), authController.EnableDisable);

router.post('/signup',authController.registerUser);

router.post('/login',authController.login);

module.exports=router;