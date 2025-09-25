# QA Web3 - Gas Fee Checker

This project validates current gas prices across multiple Ethereum-compatible networks using `ethers.js`. It's designed as a QA automation utility to monitor and log gas fee trends in real time.

## 📊 Objective

- Connect to multiple blockchain networks.
- Retrieve current `gasPrice` from each RPC provider.
- Format and validate the gas price in Gwei.
- Log results or errors clearly.

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qa-web3-gas-fee-checker.git
cd qa-web3-gas-fee-checker
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with this structure:

```env
MAINNET_RPC=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
POLYGON_RPC=https://polygon-rpc.com
ARBITRUM_RPC=https://arb1.arbitrum.io/rpc
```

4. Run the checker:

```bash
node qa-web3-gas-fee-checker.js
```

## 📊 Sample Output

```
✅ Ethereum Mainnet: 14.26 Gwei
✅ Polygon: 1.02 Gwei
✅ Arbitrum One: 0.44 Gwei
```

## 🧐 About

This project is part of a practical QA Web3 portfolio by Raúl Casado (GaslessQA), focused on creating lightweight validators for blockchain operations.

More network coverage, automation and alerts can be added later.

## 📃 Author

**Raúl Casado – GaslessQA**  
🔗 [https://www.linkedin.com/in/gaslessqa/](https://www.linkedin.com/in/gaslessqa/)

## 📚 License

MIT
