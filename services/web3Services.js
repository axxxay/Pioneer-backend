const { isAddress } = require('web3-validator');
const web3 = require('../config/web3');


const getEthBalance = async (address) => {
    try {
        if (!isAddress(address)) {
            const error = new Error('Invalid Ethereum address');
            error.statusCode = 400;
            throw error;
        }
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        return balanceEth;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    getEthBalance
}