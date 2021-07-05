require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note saddle hospital inner enroll flip gather'; 
let testAccounts = [
"0xba78ed5d41140570ef44b73e2552b365188ccdfe39b16cf27ef2a2efd62bdbe1",
"0x573723fa16a6c9cf205736647176402ec32ab5d0effda9109a1a8e8f6084f9a9",
"0x43be219697dfea8b88b97224ce08f47a0062f17b5506184e97a66799391dc304",
"0xd39fbe03cf12fac6897a23b4423780e1607c2bc4df851d78d898890c562220f7",
"0x6df7406b4e95e4975ba3e9eaa9922382d4b2c585df6a59a3dee5b4d8a4528d7c",
"0xd15d2a4b95f668cf34038a25734baa778af614b889634c582105d1dbf46581e9",
"0xb4f9e532c349cdd3e87e128eb63e9f921db1986267df941421870d84758fb16a",
"0x61ec2e5b5d98d2fd144e76c0797b1432b3f93680c851a8f087b34fe56cd1682a",
"0xacd8c6661216b695922d39fb73f7dde43ee9b3da1d015d55e3c10083d9f3542c",
"0xff805b547729c5bd031663eea9b783f5b830d7f674993a203a407ec31fe21067"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


