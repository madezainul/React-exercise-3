import axios from 'axios';
// import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/movies'

const getMovies = async (cb) => {
    try {
        let result = await axios({
            method: "GET",
            url: URL
        })
        // console.log(result)
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const addMovie = async (movie) => {
    try {
        let result = await axios({
            method: "POST",
            url: URL + "/create",
            data: movie
        })

        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
}

export {
    getMovies, addMovie
}