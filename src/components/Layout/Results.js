const Results = (props) => {
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2 justify-between h-screen overflow-scroll">
      <h1 className="select-none uppercase font-bold text-2xl border-b text-center">
        Results
      </h1>

      <div className="py-4 flex gap-2 flex-wrap select-none">
        {props.coins.map((coins, index) => (
          <div
            key={index}
            className={coins===0?"h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl":"h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl"}
          >
            <div className={coins===0?"flex select-none text-red-300":"flex text-amber-300"}>{coins === 0 ? "H" : "T"}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Results;
