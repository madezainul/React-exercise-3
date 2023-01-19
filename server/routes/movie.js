const movieRoute = require('express').Router()
const { MovieController } = require('../controllers')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqeSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'movie-' + uniqeSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

movieRoute.get('/', MovieController.getMovies)
// movieRoute.post('/create', MovieController.create)
movieRoute.post('/create', upload.single('image'), MovieController.create)
movieRoute.post('/update/:id', MovieController.update)
movieRoute.post('/delete/:id', MovieController.delete)

module.exports = movieRoute