const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({
    extended: false
}));

const User=require('./Controller/User/userController')

//========================user routes===================
Router.post('/userRegistration',User.userRegistration);
Router.post('/userlogin',User.userlogin);
Router.post('/userUpdate',User.userUpdate);
Router.post('/userDelete',User.userDelete);
Router.get('/listUser',User.listUser)



















module.exports=Router;