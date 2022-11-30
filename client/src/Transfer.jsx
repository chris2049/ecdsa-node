import { useState } from "react";
import server from "./server";
import { recoverPublicKey, sign } from "ethereum-cryptography/secp256k1";
import {toHex} from "ethereum-cryptography/utils";



function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const[msg, setMsg] = useState("");
  const[nonce, setNonce] = useState("0");
  const[signature, setSignature] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();
    const pubKey =toHex(recoverPublicKey(msg, signature, parseInt(nonce)));
    if(address == pubKey){
        try {
        const {
          data: { balance },
        } = await server.post(`send`, {
          sender: address,
          amount: parseInt(sendAmount),
          recipient,
        });
        setBalance(balance);
      } catch (ex) {
        alert(ex.response.data.message);
      }
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Signature
        <input
          placeholder="Signature here"
          value={signature}
          onChange={setValue(setSignature)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>
        Message
        <input
          placeholder="type Messafe here"
          value={msg}
          onChange={setValue(setMsg)}
        ></input>
      </label>

      <label>
        Nonce
          <input
            placeholder="nonce goes here"
            value={nonce}
            onChange={setValue(setNonce)}
          ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
