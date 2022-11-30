const secp = require('ethereum-cryptography/secp256k1');
const {keccak256} = require("ethereum-cryptography/keccak");
const{utf8ToBytes} = require("ethereum-cryptography/utils");

const {toHex} = require('ethereum-cryptography/utils');


const privateKey = secp.utils.randomPrivateKey();
console.log("private Key: ", toHex(privateKey));

const publicKey = secp.getPublicKey(toHex(privateKey));
console.log("publicKey: ", toHex(publicKey));
