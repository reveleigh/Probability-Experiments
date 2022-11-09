const Modal = (props) => {
  const backdrop =
    "fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-1";
  const modal =
    "p-6 fixed w-5/6 lg:w-2/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-100";
    const close = "py-2 px-8 text-center text-2xl border-4 cursor-pointer border-gray-600 bg-gray-100 rounded-lg w-24 h-12 flex justify-center items-center";
  return (
    <div>
      <div className={backdrop} onClick={props.info}></div>
      <div className={modal}>
        <h1 className="text-4xl border-b-2">{props.title}</h1>
        <p className="pt-4">
          {props.description}
        </p>
        <p className="pt-4 text-center text-2xl">{props.formula}</p>
        <p className="pt-4 text-center text-2xl">{props.formula2}</p>
        <div className="flex justify-center p-4">
            <div className={close} onClick={props.info}>OK</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
