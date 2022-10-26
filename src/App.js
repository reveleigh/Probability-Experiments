import React, {useState } from 'react';
import Controls from "./components/Layout/Controls";
import Results from "./components/Layout/Results";
import Modal from './components/Layout/Modal';




function App() {
  const[coins, setCoins] = useState([]);
  const addCoinHandler = (coin) => {
    setCoins((prevCoins) => {
      return [coin, ...prevCoins];
    });
};

  return (
    <div className="App">
      <div className="text-gray-600 font-body bg-gray-100">
        <Modal />

        <div className="grid md:grid-cols-3">

          <Controls onAddCoin={addCoinHandler}/>

          <Results coins={coins}/>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
