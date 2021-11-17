const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');


router.get('/', async(req, res) => { //get all aliens/users
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }
    catch(err){
        res.send('Error ' + err)

    }
});
router.get('/:id', async(req, res) => { //get one alien/user by using id
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }
    catch(err){
        res.send('Error ' + err)

    }
});
router.patch('/:id', async(req, res) => { //update/patch one alien/user details by using id
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        alien.save();
        res.json(alien);
    } catch(err){
        res.send("Error ", err);
    }
});
router.delete('/:id', async(req, res) => { //delete one alien/user by using id
    try{
        const alien = await Alien.findById(req.params.id);
        alien.remove();
        res.json(alien);
    } catch(err) {
        res.send("Error ", err);
    }
});
router.post('/', async(req, res) => { //add one alien/user
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error '+err);
    }
})

module.exports = router;
