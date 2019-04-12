const express = require('express');

const router = express.Router();

const burger = require('./../models/burger');

router.get('/', function(req, res) {
    // Display burgers
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    // Create new burger
    burger.create(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    // Modify burger
    var condition = "burger_id = " + req.params.id;
    // console.log(req.body.eaten);
    burger.update('burger_eaten', true, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.put('*', function(req, res) {
    // 404 Page
})

module.exports = router;