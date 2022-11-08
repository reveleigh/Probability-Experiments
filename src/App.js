import React, {useState } from 'react';
import Controls from "./components/Layout/Controls";
import Results from "./components/Layout/Results";




function App() {
  const[coins, setCoins] = useState([]);
  const addCoinHandler = (coin) => {
    setCoins((prevCoins) => {
      return [coin, ...prevCoins];
    });
};
const clearCoinsHandler = () => {
  setCoins([]);
};

  return (
    <div className="App">
      <div className="text-gray-600 font-body bg-gray-100">

        <div className="grid md:grid-cols-3">

          <Controls onAddCoin={addCoinHandler} onReset ={clearCoinsHandler}/>

          <Results coins={coins}/>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
