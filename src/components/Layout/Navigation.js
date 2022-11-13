import Menu from "./Menu";


const Navigation = (props) => {
  

  return (
    <nav className="text-right">
      <div className="flex justify-end items-center md:border-b">
        <h1 className="font-bold uppercase p-4">
          <a className="hover:text-gray-700" href="/">
            Probability Experiments
          </a>
        </h1>
        <div className="px-4 cursor-pointer p-4 relative">
          <svg
            onClick={props.showSubMenu}
            className="w-6 data-dropdown-toggle='dropdownId'"
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
      
      {props.subMenu && <Menu className="relative" subMenu={props.subMenu} setCoin={props.setCoin} />}
    </nav> 
  );
};

export default Navigation;


