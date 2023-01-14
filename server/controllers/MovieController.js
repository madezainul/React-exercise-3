const { movie, genre, moviedetail, moviegenre } = require('../models')

class MovieController {
    static async getMovies(req, res) {
        try {
            let result = await movie.findAll({
                order: [
                    ["id", "asc"]
                ]
            })
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    static async create(req, res) {
        // try {
        //     const { title, price, release, rating, studio, desc } = req.body;
        //     const newMovie = await movie.create({ title, image, price });
        //     await moviedetail.create({ release, rating, studio, desc, movieId: newMovie.id });
            // for (const genre of genres) {
            //     moviegenre.create({ movieId: newMovie.id, genreId: genre });
            // }
            // const result = await movie.findOne({
            //     where: { id: newMovie.id },
            //     include: [moviedetail, genre]
            // })
            // res.json(result)
            // console.log(result)
        // } catch (error) {
        //     res.json(error)
        // }
        try {
            const { title, price, release, rating, studio, desc } = req.body
            const newMovie = await movie.create({title, price})
            await moviedetail.create({ release, rating, studio, desc, movieId: newMovie.id })
            let result = await newMovie.findOne({
                where: {id: newMovie.id},
                include: [moviedetail]
            })
            // console.log(result)
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    static async update(req, res) {}

    static async delete(req, res) {}

    static async getMovieGenres(req, res) {
        try {
            const id = +req.params.id

            let result = await moviegenre.FindAll({

            })
        } catch (error) {
            req.json(error)
        }
    }
}

module.exports = MovieController