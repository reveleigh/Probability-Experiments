const CoinFlip = (props) => {
  const coinButton =
    "py-2 px-8 text-center text-2xl border-4 cursor-pointer border-gray-600 bg-gray-100 rounded-full w-24 h-24 flex justify-center items-center";

  return (
    <div>
      <div className="flex justify-center p-4">
        <div onClick={props.flip} className={coinButton}>
          <div className="flex select-none">FLIP</div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div onClick={props.reset} className="cursor-pointer">
          <div className="flex select-none">Reset</div>
        </div>
      </div>
    </div>
  );
};
export default CoinFlip;
