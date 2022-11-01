import React, { useState, useEffect } from 'react';
import Navigation from "./Navigation";
import Title from "./Title";
import CoinStats from "../CoinToss/CoinStats";
import CoinFlip from "../CoinToss/CoinFlip";
import Modal from './Modal';

const Controls = (props) => {

    const [heads, setHeads] = useState(0);
    const [tails, setTails] = useState(0);
    const [PHeads, setPHeads] = useState((0).toFixed(5));
    const [PTails, setPTails] = useState((0).toFixed(5));
    const [info, setInfo] = useState(false);

    //Funtion to display modal
    const infoHandler = () => {
        setInfo(true);
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

    useEffect(() => {
        if (heads + tails > 0) {
            setPHeads((heads / (heads + tails)).toFixed(5));
            setPTails((tails / (heads + tails)).toFixed(5));
        }
    }, [heads, tails]);

    return(
        <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
        {info && <Modal />}
            
            <Navigation />

            <Title info={infoHandler}/>

            <CoinStats heads={heads} tails={tails} pTails={PTails} pHeads={PHeads}/>

            <CoinFlip flip={flipCoin} />
                 
          </div>

    );
};
export default Controls;