function App() {
  return (
    <div className="App">
      <div className="text-gray-600 font-body bg-gray-100">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 md:flex flex-col md:justify-start bg-white">
            <nav className="text-right">
              <div className="flex justify-end items-center">
                <h1 className="font-bold uppercase p-4 md:border-b">
                  <a className="hover:text-gray-700" href="/">
                    Probability Experiments
                  </a>
                </h1>
                <div className="px-4 cursor-pointer md:hidden">
                  <svg
                    className="w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
              </div>
            </nav>
            <div className="text-center p-4 flex gap-2 justify-center">
              <h1 className="uppercase font-bold text-4xl text-center">
                Heads or tails
              </h1>
              <svg
                className="w-6 align-middle"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </div>
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
          <main className="px-16 py-6 bg-gray-100 md:col-span-2 justify-between h-screen">
            <h1 className="uppercase font-bold text-2xl border-b text-center">
              Results
            </h1>

            <div className="py-4 flex gap-2 flex-wrap justify-center">
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-amber-100 border-4 border-amber-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-amber-300">T</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
              <div className="h-24 bg-red-100 border-4 border-red-600 rounded-full w-24 flex items-center justify-center text-6xl">
                <div className="flex text-red-300">H</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
