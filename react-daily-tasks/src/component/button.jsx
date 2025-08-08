import { useState } from "react";

const CustomButton = ({ handleClick, children }) => {
  const [blick, setBlick] = useState(false);
  const handleButtonClick = () => {
    setBlick(true);
    setTimeout(() => {
      setBlick(false);
    }, 100);
    handleClick();
  };
  return (
    <button
      className={`bg-sky-500 px-5 py-1.5 text-lg rounded-md cursor-pointer transition-opacity duration-200 ${
        blick ? "opacity-60" : "opacity-100"
      }`}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
