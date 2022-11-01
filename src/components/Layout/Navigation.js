const Navigation = (props) => {
    return(
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

    );
};

export default Navigation;