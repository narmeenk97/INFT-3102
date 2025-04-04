//Serverless function to fetch the weather for Toronto 
//axios used for making HTTP requests SS
const axios = require('axios');

exports.handler = async (event, context) => {
    const API_KEY = 'bee6eaf209ab3790738bae1de1b53369';
    const city = 'Toronto';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        const weatherData = response.data;

        return {
            statusCode: 200,
            body: JSON.stringify({
                city: weatherData.name,
                temperature: weatherData.main.temp,
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon
            })
        };
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({
                error: error.message || 'Failed to fetch the weather'
            })
        };
    }
};