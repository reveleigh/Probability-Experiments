const Menu = (props) => {
  const coinStyle =
    "mt-2 p-1 border-b bg-gray-100 hover:bg-gray-200 cursor-pointer justify-end";

  return (
    <div className="grid grid-flow-row auto-rows-max justify-end">
      <div
        className={coinStyle}
        onClick={() => props.setCoin("Heads or Tails")}
      >
        Heads or Tails
      </div>
      <div className={coinStyle} onClick={props.setCoin}>
        Others to follow  
      </div>
    </div>
  );
};

export default Menu;
