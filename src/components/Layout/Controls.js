import Navigation from "./Navigation";
import Title from "./Title";
import CoinStats from "../CoinToss/CoinStats";
import CoinFlip from "../CoinToss/CoinFlip";

const Controls = (props) => {
    return(
        <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
            
            <Navigation />

            <Title />

            <CoinStats />

            <CoinFlip />
            
            
           
          </div>

    );
};
export default Controls;