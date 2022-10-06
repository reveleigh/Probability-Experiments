import Navigation from "./Navigation";
import Title from "./Title";

const Controls = (props) => {
    return(
        <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
            
            <Navigation />

            <Title />

            
            <div className="flex p-4 justify-center gap-4">
              <div className="border-b-4 border-red-600 rounded p-1 flex-grow text-center bg-red-100">
                Heads: 12
              </div>
              <div className="border-b-4 border-amber-600 rounded p-1 flex-grow text-center bg-amber-100">
                Tails: 12
              </div>
              <div className="border-b-4 border-gray-600 rounded p-1 flex-grow text-center bg-gray-100">
                Total: 24
              </div>
            </div>
            <div className="p-4 text-center">
              Heads proportion
              <div className="text-4xl text-center text-red-600">
                0.512733763
              </div>
            </div>
            <div className="p-4 text-center">
              Tails proportion
              <div className="text-4xl text-center text-amber-600">
                0.482629716
              </div>
            </div>
            <div className="flex justify-center p-4">
              <div className="py-2 px-8 text-center text-2xl border-4 border-gray-600 bg-gray-100 rounded-full w-24 h-24 flex justify-center items-center">
                <div className="flex">FLIP</div>
              </div>
            </div>
          </div>

    );
};
export default Controls;