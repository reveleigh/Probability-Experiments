import React, { useState, useEffect } from "react";
import Navigation from "../Layout/Navigation";
import Title from "../Layout/Title";
import CoinStats from "./CoinStats";
import CoinFlip from "./CoinFlip";
import Modal from "../Layout/Modal";

const CoinControls = (props) => {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [PHeads, setPHeads] = useState((0).toFixed(5));
  const [PTails, setPTails] = useState((0).toFixed(5));
  const [info, setInfo] = useState(false);

  //Funtion to display modal
  const infoHandler = () => {
    setInfo(!info);
  };

  //function to flip coin

  const flipCoin = () => {
    const coin = Math.floor(Math.random() * 2);
    if (coin === 0) {
      setHeads(heads + 1);
    } else {
      setTails(tails + 1);
    }
    props.onAddCoin(coin);
  };

  const reset = () => {
    setHeads(0);
    setTails(0);
    setPHeads((0).toFixed(5));
    setPTails((0).toFixed(5));
    props.onReset();
  };

  useEffect(() => {
    if (heads + tails > 0) {
      setPHeads((heads / (heads + tails)).toFixed(5));
      setPTails((tails / (heads + tails)).toFixed(5));
    }
  }, [heads, tails]);

  const modalTitle = "Heads or Tails";
  const modalDescription =
    "When a coin is tossed, there are only two possible outcomes so the probability formula is as follows:";
  const modalFormula = "P(Head) = P(H) = 1/2";
  const modalFormula2 = "P(Tail) = P(T) = 1/2";

  return (
    <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
      {info && (
        <Modal
          info={infoHandler}
          title={modalTitle}
          description={modalDescription}
          formula={modalFormula}
          formula2={modalFormula2}
        />
      )}

      <Navigation setCoin={props.setCoin} showSubMenu={props.showSubMenu} subMenu={props.subMenu}/> 
      {props.showCoin && (<div>
        
        <Title info={infoHandler} title={props.title} />
        <CoinStats
          heads={heads}
          tails={tails}
          pTails={PTails}
          pHeads={PHeads}
        />
        <CoinFlip flip={flipCoin} reset={reset} />
      </div>)}
    </div>
  );
};
export default CoinControls;
