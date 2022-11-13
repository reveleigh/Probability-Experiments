const CoinStats = (props) => {
    return(
        <div>
        <div className="flex p-4 justify-center gap-4">
              <div className="border-b-4 border-red-600 rounded p-1 flex-grow text-center bg-red-100 select-none">
                Heads: {props.heads}
              </div>
              <div className="border-b-4 border-amber-600 rounded p-1 flex-grow text-center bg-amber-100 select-none">
                Tails: {props.tails}
              </div>
              <div className="border-b-4 border-gray-600 rounded p-1 flex-grow text-center bg-gray-100  select-none">
                Total: {props.heads + props.tails}
              </div>
            </div>
            <div className="p-4 text-center select-none">
            Heads proportion
            <div className="text-4xl text-center text-red-600  select-none">
              {props.pHeads}
            </div>
          </div>
          <div className="p-4 text-center select-none">
            Tails proportion
            <div className="text-4xl text-center text-amber-600 select-none">
            {props.pTails}
            </div>
          </div>
        </div>
    );
};

export default CoinStats;