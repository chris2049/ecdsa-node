const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04fe781928ef0aac8d1cb89cf3e7e1701269deaa21e8c2fdd0ceed20e372a5ca6596ae1fa9ea2f450a4cf18372ec74bd015f96a773e75bdead257f80b9105e2561": 100,
  "0457e72dbce4140cf14e170569468c4d0c5197617e527f5eddd3ed2b6ba6663940b60274ee4eba4f00e75383facf14776be78dd62afd17b184709365846f660131": 50,
  "048bb50a99fcc16577e97f3fc136cad0abda157b9ed52a2e30c3ec04c00707e32e1b344c33a26db52fc4c3851c6f06021146309c420db8f8dacef666d67c41eca8": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
