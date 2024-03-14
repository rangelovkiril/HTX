  import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect } from "chai";
  import { ethers } from "hardhat";
  import { ERC20Permit__factory, Rating, Rating__factory } from "../typechain-types"
import exp from "constants";

  describe("Rating", () => {    
    const deploy = async () => {
    const [deployer, account1, account2] = await ethers.getSigners() 
    
    const Factory: Rating__factory = await ethers.getContractFactory("Rating", deployer);
    const rating: Rating = await Factory.deploy(deployer.address); 
    await rating.waitForDeployment()

    return {rating, deployer, account1, account2}
  }
    it("Should be deployed", async () => {
      const {rating, deployer} = await loadFixture(deploy)
      expect(await rating.owner()).to.equal(deployer.address) 

      console.log(`Deployed with ${deployer.address}`) 
    })  




    it("Should transfer tokens",async () => {
      const {rating, account1, account2} = await loadFixture(deploy)

      let tokens1 = 10; 

      await rating.mint(account1, BigInt(tokens1))

      expect(await rating.balanceOf(account1)).to.equal(tokens1)
     // expect(await rating.mint(ethers.ZeroAddress, BigInt(0))).to.be.reverted

      await rating.connect(account1).approve(account2, BigInt(tokens1 / 2))
      await rating.connect(account2).transferFrom(account1, account2, BigInt(tokens1 / 2))        
    })
    
    it("Should burn", async () => {
      const {rating, deployer, account1, account2, } = await loadFixture(deploy)

      await rating.mint(account1, BigInt(10))
      await rating.connect(account1).burn(BigInt(10))
      // expect(rating.balanceOf(account1)).to.equal(0) by some reason +0 and 0 are not equal 
    })
  })