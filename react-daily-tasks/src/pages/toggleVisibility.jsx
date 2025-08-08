import { useState } from "react";
import CustomButton from "../component/button";

function ToggleVisibility() {
  const [displayData, setDisplayData] = useState(false);
  return (
    <div className="flex justify-center items-center  bg-indigo-950 h-full ">
      <div className="flex flex-col items-center h-24 w-52 space-y-3 text-white">
        <CustomButton
          style="flex space-x-3"
          handleClick={() => setDisplayData((value) => !value)}
        >
          Toggle
        </CustomButton>
        {displayData && (
          <h1 className="text-2xl font-medium">Text is displayed!</h1>
        )}
      </div>
    </div>
  );
}

export default ToggleVisibility;
