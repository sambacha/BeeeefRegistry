// hardhat.config.js
// const { alchemyApiKey, mnemonic } = require('./secrets.json');
require('@nomiclabs/hardhat-ethers');
require("@typechain/hardhat");
require("hardhat-packager");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
/*    networks: {
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
            accounts: {
                mnemonic: mnemonic
            }
        }
    },*/
    packager: {
      // What contracts to keep the artifacts and the bindings for.
      contracts: ["BeeeefRegistry"],
      // Whether to include the TypeChain factories or not.
      // If this is enabled, you need to run the TypeChain files through the TypeScript compiler before shipping to the registry.
      includeFactories: true,
    },
    paths: {
      artifacts: "./artifacts",
      cache: "./cache",
      sources: "./contracts",
 //     tests: "./test",
    },
    solidity: {
        version: '0.8.4',
        settings: {
            metadata: {
                bytecodeHash: 'none',
            },
            optimizer: {
                enabled: false,
                runs: 200,
                details: {
                    yul: false,
                },
            },
        },
        typechain: {
          outDir: "typechain",
          target: "ethers-v5",
        },
    }
    
};