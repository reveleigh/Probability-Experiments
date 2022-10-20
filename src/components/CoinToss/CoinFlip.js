const CoinFlip = (props) => {
    
    return(
    <div className="flex justify-center p-4">
        <div onClick={props.flip} className="py-2 px-8 text-center text-2xl border-4 cursor-pointer border-gray-600 bg-gray-100 rounded-full w-24 h-24 flex justify-center items-center">
          <div className="flex select-none">FLIP</div>
        </div>
      </div>
    );
};
export default CoinFlip;