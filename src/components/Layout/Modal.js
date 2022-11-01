const Modal = (props) => {

    const backdrop = "fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50";
    const modal = "fixed w-5/6 lg:w-2/4 left-1/2 top-1/2 h-96 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-100";

    
    return(
        <div className={backdrop}>
            <div className={modal}>
            <h1>Heads or tails</h1>
            <p>There is a 50% chance of landing a heads</p>
            </div>
        </div>
    )

};

export default Modal;