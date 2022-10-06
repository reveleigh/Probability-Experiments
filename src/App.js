import Controls from "./components/Layout/Controls";
import Results from "./components/Layout/Results";

function App() {
  return (
    <div className="App">
      <div className="text-gray-600 font-body bg-gray-100">
        <div className="grid md:grid-cols-3">

          <Controls />

          <Results />
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
