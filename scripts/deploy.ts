const hre = require('hardhat')
import { ethers, network } from 'hardhat'
import * as fs from 'node:fs'
import * as path from 'path'

async function deploy() {
    if (network.name === 'hardhat') {
        console.warn(
            'You are trying to deploy a contract to the Hardhat Network, which' +
                'get automatecally created and destroyed ecery time. Use Hardhat' +
                " option '--network localhost'"
        )
    }

    const [deployer] = await ethers.getSigners()

    console.log('Deployed with ', await deployer.address)

    const Proposals = await ethers.getContractFactory('Proposals', deployer)
    const proposals = await Proposals.deploy(deployer.address)
    await proposals.waitForDeployment()

    saveFrontendFiles({
        Proposals: proposals
    })
}

async function saveFrontendFiles(contracts: object) {
  const contractsDir = path.join(__dirname, '../', 'src/contracts')

  if (!fs.existsSync(contractsDir)) {
      fs.mkdirSync(contractsDir)
  }

  for (const [name, contract] of Object.entries(contracts)) {
      const contractFactory = await ethers.getContractFactory(name)
      const contractInterface = contractFactory.interface
      const contractBytecode = contractFactory.bytecode

      if (contract) {
          fs.writeFileSync(
              path.join(contractsDir, `${name}-contract-address.json`),
              JSON.stringify({ [name]: contract.address })
          )
      }

    
      const ContractArtifact = hre.artifacts.readArtifact(name)
    
      fs.writeFileSync(
        path.join(contractsDir, '/', name + '.json'),
        JSON.stringify(ContractArtifact, null, 2))
  }
}



deploy()
.then(() => process.exit(0))
.catch((error) => {
  console.log(error)
  process.exit(0)
})
