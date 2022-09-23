const Migrations = artifacts.require("Migrations");
const PancakeRouter = artifacts.require("PancakeRouter");
const PancakeRouter01 = artifacts.require("PancakeRouter01");
const PancakeMigrator = artifacts.require("PancakeMigrator");
const WETH9 = artifacts.require("WETH9");

module.exports = async function(deployer) {
    await deployer.deploy(Migrations);
    // 0x0CD6EaaA9E01981b2276cfbA233a4C8d405cBD6C UniswapV2Factory
    const weth = await deployer.deploy(WETH9); // This needs to be swapped out with the prod WVLX when deploy to prod
    await deployer.deploy(PancakeRouter, "0x0CD6EaaA9E01981b2276cfbA233a4C8d405cBD6C", weth.address)
    const router01 = await deployer.deploy(PancakeRouter01, "0x0CD6EaaA9E01981b2276cfbA233a4C8d405cBD6C", weth.address)
    await deployer.deploy(PancakeMigrator, "0x0CD6EaaA9E01981b2276cfbA233a4C8d405cBD6C", router01.address)
};