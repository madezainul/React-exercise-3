const { moviegenre, movie, genre } = require('../models')

class MovieGenreController {
    static async getMovieGenres(req, res) {
        try {
            let result = await moviegenre.findAll({
                order: [
                    ["id", "asc"]
                ], include: [movie, genre]
            })
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    static async create(req, res) {
        try {
            const { movieId, genreId } = req.body
            let result = await moviegenre.create({
                movieId: +movieId,
                genreId: +genreId
            })
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    static async update(req, res) {}

    static async delete(req, res) {}
}

module.exports = MovieGenreController