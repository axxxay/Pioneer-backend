const initializeDB = require('../config/database');
const axios = require('axios');
require('dotenv').config();

let db;
initializeDB().then(database => {
  db = database;
});

const fetchDataFromPublicAPI = async (category, limit) => {
    try {
        let apiUrl = 'https://api.publicapis.org/entries?';
        if (category) {
            apiUrl += 'category=' + category;
        }
        const response = await axios.get(apiUrl);
        const data = response.data;
        if (limit && data.entries && data.entries.length > limit) {
            data.entries = data.entries.slice(0, limit);
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    fetchDataFromPublicAPI
}