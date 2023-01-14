const genreRoute = require('express').Router()
const { GenreController } = require('../controllers')

genreRoute.get('/', GenreController.getGenres)
genreRoute.post('/create', GenreController.create)
genreRoute.post('/update/:id', GenreController.update)
genreRoute.get('/delete/:id', GenreController.delete)

module.exports = genreRoute