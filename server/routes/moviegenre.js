const moviegenreRoute = require('express').Router()
const { MovieGenreController } = require('../controllers')

moviegenreRoute.get('/', MovieGenreController.getMovieGenres)
moviegenreRoute.post('/create', MovieGenreController.create)

module.exports = moviegenreRoute