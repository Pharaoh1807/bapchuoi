const express = require('express');
const router = express.Router();
const userName = require('../models/user')

router.get('/', (req, res, next) => {
    userName.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {res.status(500).json(
        'Loi sever'
    )})
})

router.post('/', (req, res, next) => {
    userName.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(data => {
        res.json('them account thanh cong')
    })
    .catch(err => {
        res.status(500).json(
        'Loi sever'
    )})
    
})

// sua password

router.put('/', (req, res, next) => {
    userName.updateOne({
        username: req.body.username
    }, {
        password: req.body.newpassword
    } )
    .then(data => {
        res.json('da sua thanh cong')
    })
    .catch(err => {res.status(500).json(
        'loi sever'
    )})
})



router.delete('/', (req, res, next) => {
    userName.deleteOne({
        username: req.body.username
    })
    .then(data => {
        res.json('da xoa thanh cong')
    })
    .catch(err => {res.status(500).json(
        'loi sever'
    )})
})

module.exports = router;