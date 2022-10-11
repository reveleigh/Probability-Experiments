import React, { useState } from 'react';
import Navigation from "./Navigation";
import Title from "./Title";
import CoinStats from "../CoinToss/CoinStats";
import CoinFlip from "../CoinToss/CoinFlip";

const Controls = (props) => {

    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);

    //function to flip coin
    const flipCoin = () => {
        const coin = Math.floor(Math.random() * 2);
        if (coin === 0) {
            setHeads(heads + 1);
        } else {
            setTails(tails + 1);
        }
    };

    return(
        <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
            
            <Navigation />

            <Title />

            <CoinStats heads={heads} tails={tails}/>

            <CoinFlip flip={flipCoin} />
            
            
           
          </div>

    );
};
export default Controls;