import { ethers } from "hardhat"

async function main() {

  const rvc = await ethers.deployContract("ReviewCoin")

  await rvc.waitForDeployment()

  console.log(
    `Deployed on ${rvc.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
