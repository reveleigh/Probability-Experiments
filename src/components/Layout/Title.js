const Total = (props) => {
    return(
        <div className="text-center p-4 flex gap-2 justify-center">
              <h1 className="uppercase font-bold text-4xl text-center">
                Heads or tails
              </h1>
              <svg onClick={props.info}
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
    );
};

export default Total;