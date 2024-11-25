import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import TimerSettings from "./components/TimerSettings";
import ProgressCircle from "./components/ProgressCircle";
import BreathingGuide from "./components/BreathingGuide";
import ControlButtons from "./components/ControlButtons";
import clearwaterFall from "./assets/duskview.mp4";
function App() {
  const [duration, setDuration] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false); // Tracks when countdown ends

  // const [playWithSound, setPlayWithSound] = useState(false);

  // const handlePlayWithSound = () => {
  //   setPlayWithSound(true);
  // };

  const handleStart = () => {
    setIsRunning(true);
    setIsComplete(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsComplete(false);
    setDuration(5);
    setPhaseIndex(0);
    setTimer(phases[0].duration); // Reset timer to the initial phase duration
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* {!playWithSound && (
        <button
          onClick={handlePlayWithSound}
          className="absolute z-20 px-4 py-2 bg-blue-500 text-white font-semibold rounded"
        >
          Play with Sound
        </button>
      )} */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        src={clearwaterFall}
        autoPlay
        loop
        fade-in
        muted //</div>={!playWithSound} // Only unmute when playWithSound is true
      ></video>

      {/* Content on top of the video */}
      <div className="relative z-10 flex flex-col items-center">
        <Hero AppName="Meditations App" />

        <TimerSettings setDuration={setDuration} />

        <ProgressCircle
          duration={duration}
          isRunning={isRunning}
          setIsComplete={setIsComplete}
        />

        <BreathingGuide
          isRunning={isRunning}
          duration={duration}
          isComplete={isComplete} // Pass down completion state
        />

        <ControlButtons
          isRunning={isRunning}
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-5"></div>
    </div>
  );
}

export default App;
