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

/* GET detail page */
router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const movie = await Movies.findById(movieId);
      res.render('detail', movie)
    } catch (error) {
      next(error)
    }
  })

module.exports = router;
