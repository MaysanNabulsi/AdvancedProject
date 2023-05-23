const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = '583bfec01d5365fa136dae1dca738fb6';

async function fetchWeatherData(location) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
}

module.exports = {
  fetchWeatherData,
};