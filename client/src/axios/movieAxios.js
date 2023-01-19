import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000'

const getMovies = async () => {
    try {
        let result = await axios({
            method: "GET",
            url: URL
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}