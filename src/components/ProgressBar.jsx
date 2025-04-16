import React, { useEffect, useState } from "react";

function ProgressBar({ progress }) {
  const [animatedProgess, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 1000);
  }, [progress]);

  return (
  
      <div className="flex justify-center mt-[20px] ">
        <div className=" border-2 border-[#141313]  w-[500px] rounded-2xl overflow-hidden ">
          <div
            className="bg-green-600  text-white transition-all duration-2000 ease-in-out text-right "
            style={{
              // width: `${progress}%`,
              transform: `translateX(${animatedProgess - 100}%)`,
              color: animatedProgess < 10 ? "black" : "white",
            }}
            role="progressbar"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={progress}
          >
            {progress}%
          </div>
        </div>
      </div>
  );
}

export default ProgressBar;
