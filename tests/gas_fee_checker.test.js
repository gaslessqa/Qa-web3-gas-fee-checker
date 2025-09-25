// QA Web3 - Gas Fee Checker Test with Jest
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

describe("Gas Price Validation", () => {
  const networks = {
    mainnet: process.env.MAINNET_RPC,
    polygon: process.env.POLYGON_RPC,
    arbitrum: process.env.ARBITRUM_RPC,
  };

  for (const [name, rpcUrl] of Object.entries(networks)) {
    test(`${name} returns valid gas price`, async () => {
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      const gasPrice = await provider.getGasPrice();
      const gasGwei = parseFloat(ethers.utils.formatUnits(gasPrice, "gwei"));

      expect(typeof gasGwei).toBe("number");
      expect(gasGwei).toBeGreaterThan(0);
    });
  }
});
