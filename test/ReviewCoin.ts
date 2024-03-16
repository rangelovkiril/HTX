import { Factory } from "react"
import { ReviewCoin__factory } from "../typechain-types"
import { ReviewCoin } from "../typechain-types/contracts"
import {ethers} from "./setup"

describe("ReviewCoin",async () => {
  
  async function deploy(){
    const [deployer] = await ethers.getSigners()

    const Factory = await ethers.getContractFactory("ReviewCoin", deployer)
    const reviewcoin = await Factory.deploy(deployer.addresss)

    await reviewcoin.waitForDeployment()

    return {deployer, reviewcoin}

  }






})