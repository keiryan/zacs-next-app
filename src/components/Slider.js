"use client";

import React, { useState } from "react";
import EmailSignUp from "./EmailSignUp";
import EmailConfirmation from "./EmailConfirmation";
import LiveStreaming from "./LiveStreaming";

function Slide({ index, position, children }) {
  const isActive = index === position;

  return (
    <div className="min-w-full h-full flex bg-white">
      <main
        className="flex-[2]"
        style={{
          opacity: isActive ? "1" : "0",
          transform: `translateX(-${isActive ? 0 : 2}%)`,
          transitionProperty: "opacity, transform", // Only apply transitions to opacity and transform
          transitionDuration: `${isActive ? "300ms, 300ms" : "300ms, 300ms"}`, // Different durations for opacity and transform
          transitionTimingFunction: "ease-in-out",
          transitionDelay: `${isActive ? "750ms, 0ms" : "0ms, 0ms"}`, // Delay only for opacity
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default function Slider() {
  const [index, setIndex] = useState(0);

  const increment = () => {
    console.log("incrementing");
    setIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  return (
    <div className="w-full h-full text-black flex max-w-screen-2xl overflow-hidden">
      <div
        className="h-full w-full flex transition-all duration-[750ms] ease-in-out"
        style={{ transform: `translateX(-${100 * index}%)` }}
      >
        <Slide index={index} position={0}>
          <section className="w-full h-full flex flex-col items-center justify-center" onClick={increment}>
           <div className="text-2xl font-bold"> Slide 1</div>
            <div>(click)</div>
          </section>
        </Slide>
        <Slide index={index} position={1}>
          <EmailSignUp advance={increment} />
        </Slide>
        <Slide index={index} position={2}>
          <EmailConfirmation advance={increment} />
        </Slide>
        <Slide index={index} position={3}>
          <LiveStreaming advance={increment} />
        </Slide>
        <Slide index={index} position={4}>
          <section className="w-full h-full flex flex-col items-center justify-center" onClick={increment}>
          <div className="text-2xl font-bold">Click to restart.</div>
          </section>
        </Slide>
      </div>
    </div>
  );
}
