const movieRoute = require('express').Router()
const { MovieController } = require('../controllers')

movieRoute.get('/', MovieController.getMovies)
movieRoute.post('/create', MovieController.create)
movieRoute.post('/update/:id', MovieController.update)
movieRoute.post('/delete/:id', MovieController.delete)

module.exports = movieRoute