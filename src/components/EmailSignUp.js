"use client";
import React, { useState } from "react";

export default function EmailSignUp({ advance }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const handleAdvance = () => {
    advance();
  };

  const validateEmail = (e) => {
    e.preventDefault();
    // Test for email validation
    const re = /\S+@\S+\.\S+/;
    console.log(re.test(email));

    //If email is invalid, set error to true
    if (!re.test(email)) {
      setError(true);
      return;
    } else if (error) {
      setError(false);
    }
    return re.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex w-full h-full gap-8 relative">
      {/* The error div below */}
      <div
        className={`absolute w-full h-full transition-all duration-300 ease-in-out pointer-events-none blur-sm scale-[1.004] ${
          error && "border-8 border-red-500"
        }`}
      ></div>
      <section className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1727872303742-3c7d9088c67c?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="random image"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="w-full h-full"
        />
      </section>
      <form
        className="flex-[2] flex items-center justify-center"
        onSubmit={validateEmail}
      >
        <div className="flex flex-col w-full max-w-80">
          <div className="flex flex-col w-full">
            <div className="mb-12 flex flex-col items-center gap-2">
            <h2 className="">
                Own Stream.
              </h2>
              <h2 className="">
                - Are you videographer? Join our early access.
              </h2>
            </div>
            <h2 className="text-xl">Enter your email address 📧</h2>
            <div className="py-1 px-2 pl-4 rounded-full w-full border-2 border-black my-2 mb-6">
              <input
                placeholder="Email address"
                className="outline-none rounded w-full bg-transparent"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-center">
              <div
                className={`transition-all duration-300 ease-in-out hover:scale-[1.08] ${
                  email ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={handleAdvance}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
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
          </div>
        </div>
      </form>
    </div>
  );
}
