import React, {useState } from 'react';
import CoinControls from "./CoinControls";
import CoinResults from "./CoinResults";

const Coin = (props) => {
  const [coins, setCoins] = useState([]);
  const addCoinHandler = (coin) => {
    setCoins((prevCoins) => {
      return [coin, ...prevCoins];
    });
  };
  const clearCoinsHandler = () => {
    setCoins([]);
  };

  return (
    <div className="text-gray-600 font-body bg-gray-100">
      <div className="grid md:grid-cols-3">
        <CoinControls onAddCoin={addCoinHandler} onReset={clearCoinsHandler} title="Heads or Tails"/>

        <CoinResults coins={coins} />
      </div>
    </div>
  );
};
export default Coin;
