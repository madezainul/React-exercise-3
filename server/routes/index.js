const route = require('express').Router()

route.get('/', (req, res) => {
    res.json({
        message: `Home Page`
    })
})

const movieRoutes = require('./movie')
const moviedetailRoutes = require('./moviedetail')
const genreRoutes = require('./genre')
const moviegenreRoutes = require('./moviegenre')

route.use('/movies', movieRoutes)
route.use('/moviedetails', moviedetailRoutes)
route.use('/genres', genreRoutes)
route.use('/moviegenres', moviegenreRoutes)

module.exports = route