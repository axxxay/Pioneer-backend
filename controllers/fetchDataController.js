const fetchDataServices = require('../services/fetchDataServices');

const fetchDataFromPublicAPI = async (req, res) => {
    try {
        const {category, limit} = req.query;
        const data = await fetchDataServices.fetchDataFromPublicAPI(category, limit);
        res.json(data);
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

module.exports = {
    fetchDataFromPublicAPI
}