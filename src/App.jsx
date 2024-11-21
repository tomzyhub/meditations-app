import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import TimerSettings from "./components/TimerSettings";
import ProgressCircle from "./components/ProgressCircle";
import BreathingGuide from "./components/BreathingGuide";
import ControlButtons from "./components/ControlButtons";

function App() {
  const [duration, setDuration] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false); // Tracks when countdown ends

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
    <div className="flex flex-col items-center min-h-screen bg-blue-100 text-center pt-10 bg-mountains bg-cover p-6 ">
      <Hero AppName="Meditions App" />

      {/* Timer Settings Component */}
      <TimerSettings setDuration={setDuration} />

      {/* Progress Circle Component */}

      <ProgressCircle
        duration={duration}
        isRunning={isRunning}
        setIsComplete={setIsComplete}
      />

      {/* Placeholder for BreathingGuide */}
      <BreathingGuide
        isRunning={isRunning}
        duration={duration}
        isComplete={isComplete} // Pass down completion state
      />

      {/* Placeholder for ControlButtons */}
      <ControlButtons
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
