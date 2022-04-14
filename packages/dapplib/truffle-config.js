require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth muscle cluster hockey knife bridge gaze'; 
let testAccounts = [
"0xc1b6b7431c1fc3af7cefe16834ecb8340b55f7f8e87508f5d70e2ad6c127a674",
"0x18c979a8c2765237767ece9f3e1f3733391e6ce18e663a3ed1704c15cf16906f",
"0x681e1d7446cd2bb7bd0817f48e3d2a112e9d328f3bb3d9dfc7f0dd153483a7a6",
"0xa61329a0f74e45b714dd9437a1372b88b3856ee0343f5ebb8f2eb43fed2c6f7e",
"0x9d344c4f22c3df226b90071b9e235092980d3bc8c0da86026697aa321250a233",
"0xf5298affb0affc6babad1bcf8cb5361881cb6c820b6335220405cbb2ef903bc4",
"0x2b6d2fa475d440e203b4a37f843cd6755f63ee2a60d6d62bbffbc8fb3a60e8a7",
"0x21aca588fa94a42417c98fb9d42768038a642b43b4ae582a67d85295cbeeba71",
"0x32182495d8271753e12ad4e2dc6ac3e8b8467a5d4720e144d1598ab9863560c9",
"0x99e2491f7ceeccd84396cfc09ed18f8c6ce47bd06962580c4569342ff44ce5ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


