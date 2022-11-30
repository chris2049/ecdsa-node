const secp = require('ethereum-cryptography/secp256k1');
const{utf8ToBytes, toHex} = require("ethereum-cryptography/utils");
const {keccak256} = require("ethereum-cryptography/keccak");


async function recover(){
const bytes = utf8ToBytes("hey");
const msg = keccak256(bytes);
console.log(toHex(msg))
const sig = await secp.sign(toHex(msg),"128e94fa1cb2ce9590a0390262abdc7e0604e81cfe9cab033b7d8cf89e8d55f7", {recovered:true} )
console.log(toHex(sig[0]), sig[1]);
console.log( secp.recoverPublicKey("77dcd57beb1f0f2e28ea0f01df187f9912d3a78de5e0bd8abf37307a7e9b7596", "304402203e9cb61fa8197132a748565eb5bcf778eb1c90a121c4dbc8fdf74d5e4418d22b022001ea359aa184860c361fa8ee974033d45b21fd5988f8b960137c938774d6f6c5", 1))
}

recover();