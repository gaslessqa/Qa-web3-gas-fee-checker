// QA Web3 - Gas Fee Checker
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

const NETWORKS = {
  mainnet: {
    name: "Ethereum Mainnet",
    rpc: process.env.MAINNET_RPC,
  },
  polygon: {
    name: "Polygon",
    rpc: process.env.POLYGON_RPC,
  },
  arbitrum: {
    name: "Arbitrum One",
    rpc: process.env.ARBITRUM_RPC,
  },
};

async function checkGasPrices() {
  for (const [key, network] of Object.entries(NETWORKS)) {
    try {
      const provider = new ethers.providers.JsonRpcProvider(network.rpc);
      const gasPrice = await provider.getGasPrice();
      const gasInGwei = ethers.utils.formatUnits(gasPrice, "gwei");

      console.log(`\u2705 ${network.name}: ${parseFloat(gasInGwei).toFixed(2)} Gwei`);
    } catch (error) {
      console.error(`\u274C ${network.name}: Failed to fetch gas price - ${error.message}`);
    }
  }
}

checkGasPrices();
