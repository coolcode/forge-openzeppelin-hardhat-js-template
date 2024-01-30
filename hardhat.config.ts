import "@nomicfoundation/hardhat-foundry"
import "@nomicfoundation/hardhat-toolbox"
import "@typechain/hardhat"
import { HardhatUserConfig } from "hardhat/config"

import "./tasks/Balance"

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 20,
    enabled: true
  },
  paths: {
    sources: "./src", // Use ./src rather than ./contracts as Hardhat expects
    cache: "./cache_hardhat", // Use a different cache for Hardhat than Foundry
  }
}

export default config