import axios from "axios";
 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '041f140fbc1a7e01125824c85e7d6ff1';
 
const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data;
    } catch (error) {
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}

export default getWeather;