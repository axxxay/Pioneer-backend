const Web3 = require('web3');
require('dotenv').config();

const web3 = new Web3.default(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);

module.exports = web3;