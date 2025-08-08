import { useState } from "react";
import CustomButton from "../component/button";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-cyan-500 h-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Count Value: {count}</h2>
      <div className="flex gap-5 p-3">
        <CustomButton handleClick={() => setCount(count + 1)}>
          Increment
        </CustomButton>
        <CustomButton handleClick={() => setCount(count - 1)}>
          Decrement
        </CustomButton>
      </div>
    </div>
  );
}

export default Count;
