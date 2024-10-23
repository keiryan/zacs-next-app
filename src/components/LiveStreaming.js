"use client";

import { useEffect, useState } from "react";

// function Pill({ children }) {
//   const [toggled, setToggled] = useState(false);

//   const handleClick = () => {
//     setToggled(!toggled);
//   };
//   return (
//     <div
//       className={`py-1 px-4 rounded-full relative hover:scale-[1.06] transition-all duration-[400ms] ease-in-out overflow-hidden capitalize border-2 ${
//         toggled ? "text-white border-[#22C55D]" : "text-black border-[black]"
//       }`}
//       onClick={handleClick}
//     >
//       <div
//         className={`absolute rounded-full bg-green-500 z-[1] transition-all duration-[400ms] ease-in-out top-1/2 left-1/2 w-2 h-2 ${
//           toggled ? "scale-[18] opacity-100" : "opacity-0"
//         }`}
//       />
//       <div className="z-[10] relative no-select">{children}</div>
//     </div>
//   );
// }

function PillCircle({ handleOption, option, currentSelectedOption }) {
  const [toggled, setToggled] = useState(false);

  // If the option is already selected, deselect it
  const handleClick = () => {
    if (option.value === currentSelectedOption.value) {
      handleOption({});
    } else {
      // If the option is not selected, select it
      handleOption(option);
    }
  };

  useEffect(() => {
    if (option.value === currentSelectedOption.value) {
      setToggled(true);
    } else {
      setToggled(false);
    }
  }, [option]);

  return (
    <div
      className={`rounded-full relative hover:scale-[1.06] transition-all duration-[400ms] ease-in-out overflow-hidden border-2 capitalize ${
        toggled
          ? "text-white border-[#22C55D] bg-green-500 w-9 h-9 "
          : "text-black border-[black] py-1 px-4 w-36 max-w-max"
      }`}
      onClick={handleClick}
    >
      <div
        className={`absolute rounded-full bg-green-500 z-[1] transition-all duration-[400ms] ease-in-out top-1/2 left-1/2 w-2 h-2 ${
          toggled ? "scale-[18] opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`z-[10] no-select text-nowrap ${
          toggled && "absolute opacity-0"
        }`}
      >
        {option.text}
      </div>
      {/* Checkmark */}
      <div className="absolute top-2.5 left-[11px] z-[12] flex items-end rotate-45">
        <div className="flex flex-col items-end">
          {/* Ghost ruler - So the container doesnt move */}
          <div
            className={`w-[6px] h-0.5 rounded-full transition-all duration-300 ease-in-out translate-x-[2px] delay-300`}
          />
          <div
            className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out translate-x-[2px] translate-y-[-0.1px] delay-300 ${
              toggled ? "w-[6px] h-0.5" : "w-0 opacity-100"
            }`}
            style={{
              transformOrigin: "100% 100%",
              transitionDuration: `${toggled ? "150ms" : "0ms"}`,
              transitionTimingFunction: "ease-in-out",
              transitionDelay: `${toggled ? "420ms" : "0ms"}`,
            }}
          />
        </div>
        <div className="flex">
          {/* Ghost ruler - So the container doesnt move */}
          <div
            className={`w-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
              toggled ? "h-[10px]" : " h-0 opacity-100"
            } `}
            style={{
              transitionDuration: `${toggled ? "150ms" : "0ms"}`,
              transitionTimingFunction: "ease-in-out",
              transitionDelay: `${toggled ? "300ms" : "0ms"}`,
              transformOrigin: "top",
            }}
          />

          <div
            className={`w-0.5 h-[10px] rounded-full transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
    </div>
  );
}

export default function LiveStreaming( { advance }) {
  const [option, setOption] = useState({});

  const handleOption = (passedOption) => {
    setOption(passedOption);
  };

  const options = [
    {
      text: "very familiar",
      value: 1,
    },
    {
      text: "not familiar",
      value: 2,
    },
    {
      text: "I know some",
      value: 3,
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <h2 className="text-2xl">How familiar are you with live streaming?</h2>
      <div className="flex gap-2 my-4">
        {options.map((currentOption) => (
          <PillCircle
            key={currentOption.value}
            handleOption={handleOption}
            option={currentOption}
            currentSelectedOption={option}
          >
            {currentOption.text}
          </PillCircle>
        ))}
      </div>
      <div
        className={`opacity-0 hover:scale-[1.08] p-1 transition-all duration-300 ease-in-out flex items-center justify-center ${option.value ? 'opacity-100' : "pointer-events-none"}`}
        onClick={advance}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="black"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
}
