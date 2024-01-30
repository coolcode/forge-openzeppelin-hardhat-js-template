const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers")
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Token", () => {
  async function deployContractFixture() {
    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy()

    return { token }
  }

  it("Should return name Token", async () => {
    const { token } = await loadFixture(deployContractFixture)

    expect(await token.name()).to.equal("Token")
  })
})
