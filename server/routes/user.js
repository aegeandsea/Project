const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
    .get('/', (req, res) => {
    try {
        const users = User.getUsers();
        res.send(users);
    } 
    catch(err) {
        res.status(401).send({message: err.message});
     }
    })

    .post ('/login', async (req, res) => {
        try {
            const user = await User.login(req.body.username, req.body.password);
            res.send({...user, password: undefined})
        }
         catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .post ('/register', async (req, res) => {
        try {
            const user = await User.register(req.body);
            console.log(user)
            res.send({...user, password: undefined})
        } 
        catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req,res) => {
        try {
            await User.deleteUser(req.body.userId);
            res.send({success: "You have deleted your account."});
        } 
        catch (error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/edit', async (req, res) => {
        try {
            const user = await User.editUser(req.body);
            console.log(user)
            res.send({...user, password: undefined});
        }
         catch(error) 
            {
                res.status(401).send({message:error.message})
             }
    })

module.exports = router;