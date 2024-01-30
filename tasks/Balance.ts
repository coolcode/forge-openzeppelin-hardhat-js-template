import { task } from "hardhat/config"
/**
 Example:
 hardhat balance --account 1
 */
task("balance", "Prints an account's balance")
  .addParam<string>("account", "The account's address")
  .setAction(async (taskArgs, { ethers }) => {
    const accountIndex = taskArgs.account
    console.info(`account index: ${accountIndex}`)
    const accounts = await ethers.getSigners()
    const address = await accounts[accountIndex].getAddress()
    const balance = await ethers.provider.getBalance(address)

    console.info(`Balance account ${address}: ${balance}`)
  })