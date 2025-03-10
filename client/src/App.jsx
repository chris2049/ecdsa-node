import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signature = {signature}
        setSignature = {setSignature}
        msg={msg}
        setMsg={setMsg}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
