const web3Service = require('../services/web3Services');

const getEthBalance = async (req, res) => {
    try {
        const address = req.query.address;
        const balance = await web3Service.getEthBalance(address);
        res.status(200).json({ balance });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

module.exports = {
    getEthBalance
}