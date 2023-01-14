const moviedetailRoute = require('express').Router()
const { MovieDetailController } = require('../controllers')

moviedetailRoute.get('/', MovieDetailController.getMovieDetails)
moviedetailRoute.post('/create', MovieDetailController.create)
moviedetailRoute.post('/update/:id', MovieDetailController.update)
moviedetailRoute.get('/delete/:id', MovieDetailController.delete)

module.exports = moviedetailRoute