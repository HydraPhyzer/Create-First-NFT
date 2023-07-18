/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
console.log(process.env.PRIVATE_KEY)
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    }
  },
};
