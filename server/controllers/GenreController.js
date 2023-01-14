const { genre } = require('../models')

class GenreController {
    static async getGenres(req, res) {
        try {
            let result = await genre.findAll({
                order: [
                    ["id", "asc"]
                ]
            })
            res.json(result)
        } catch (error) {
            req.json(error)
        }
    }

    static async create(req, res) {
        try {
            const { name } = req.body
            let result = await genre.create({ name })
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }

    static async update(req, res) {}

    static async delete(req, res) {}
}

module.exports = GenreController