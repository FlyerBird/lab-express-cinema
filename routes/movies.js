const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies')

/* GET movies page */
router.get('/', async (req, res, next) => {
    try {
        const movies = await Movies.find({});
        res.render('movies', {movies}); 
    } catch (error) {

    }
})   

module.exports = router;
