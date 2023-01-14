const { moviedetail, movie } = require('../models')

class MovieDetailController {
    static getMovieDetails(req, res) {
        moviedetail.findAll({
            order: [
                ["id", "asc"]
            ], include: [movie]
        })
        .then(moviedetails => {
            res.json(moviedetails)
        })
        .catch(err => {
            res.json(err)
        })
    }

    static create(req, res) {
        const { release, rating, studio, desc, movieId } = req.body
        moviedetail.create({
            release,
            rating,
            studio,
            desc,
            movieId
        })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }
    
    static update(req, res) {}

    static delete(req, res) {
        const id = +req.params.id
        moviedetail.destroy({ where: {id} })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports = MovieDetailController