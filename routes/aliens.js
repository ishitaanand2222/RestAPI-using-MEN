//routers are 
//we have multiple request like get, post, put, etc and different request we have different ur
//and for different urls we have different handlers which are called as routers
//MVC
//Model - Schema 
//View - UI
//Controller - Router

const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

//we should use async request
router.get('/', async(req,res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)

    }catch(err){
        res.send('Error' + err)
    }
})
//to get only one user
router.get('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)

    }catch(err){
        res.send('Error' + err)
    }
})

//it will accept all the values
router.post('/', async(req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.patch("/:id",async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()//for delete instead of save do remove()
        res.json(a1)      
    }catch(err){
        res.send('Error' + err)
    }
})
module.exports = router