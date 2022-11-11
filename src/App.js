import React, { useState } from "react";
import Coin from "./components/CoinToss/Coin";

function App() {
  const [coin, setCoin] = useState(true);

  const coinHandler = (menuItem) => {
    if (menuItem === "Heads or Tails") {
      setCoin(true);
    } else {
      setCoin(false);
    }
  };

  return (
        <div className="App"><Coin setCoin={coinHandler} coin={coin} /></div>
  );
}

export default App;
