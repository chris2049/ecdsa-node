const secp = require('ethereum-cryptography/secp256k1');
const {keccak256} = require("ethereum-cryptography/keccak");
const{utf8ToBytes, toHex} = require("ethereum-cryptography/utils");

pKey = "46adb4fcee085e4034f3109feeab17e9d228b0a25ab244dfc8884fed1c15ee62"
const bytess = utf8ToBytes("hi");
async function sign(msg, privateKey){
    signature = await secp.sign(keccak256(msg), privateKey, opts = {recovered: true})
    console.log(signature[0], signature[1], keccak256(msg));
}

sign(bytess, pKey)