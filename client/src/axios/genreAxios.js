import axios from 'axios'

const URL = 'http://localhost:3000/genres'

const getGenres = async (cb) => {
    try {
        let result = await axios({
            method: "GET",
            url: URL
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

export {
    getGenres
}