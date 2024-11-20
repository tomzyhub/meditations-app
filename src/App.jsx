import React, { useState } from "react";
import Hero from "./components/Hero";
import TimerSettings from "./components/TimerSettings";
import ProgressCircle from "./components/ProgressCircle";
import BreathingGuide from "./components/BreathingGuide";

function App() {
  const [duration, setDuration] = useState(5);

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 text-center pt-10 bg-mountains bg-cover p-6 ">
      <Hero AppName="Meditions App" />
      {/* Timer Settings Component */}
      <TimerSettings setDuration={setDuration} />
      {/* Progress Circle Component */}
      <ProgressCircle duration={duration} />
      {/* Placeholder for ProgressCircle */}

      {/* Placeholder for BreathingGuide */}
      <BreathingGuide />
      {/* Placeholder for ControlButtons */}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-64">
        Control Buttons Components
      </div>
    </div>
  );
}

export default App;
