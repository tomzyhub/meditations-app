import React from "react";

function Hero(props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">{props.AppName}</h1>
      <p className="mt-4 mb-4 text-lg text-white">
        A simple breathing meditation timer
      </p>
    </>
  );
}

export default Hero;
