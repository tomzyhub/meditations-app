import React from "react";
import Hero from "./components/Hero";
import TimerSettings from "./components/TimerSettings";
import ProgressCircle from "./components/ProgressCircle";

function App() {
  // const [duration, setDuration] = useState(5);

  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-100 text-center pt-10 bg-mountains bg-cover p-6 ">
      <Hero AppName="Meditions App" />

      {/* TimerSettings here*/}
      <TimerSettings />

      {/* Placeholder for ProgressCircle */}
      <ProgressCircle />
      {/* Placeholder for BreathingGuide */}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-64">
        Breathing Guide Component
      </div>

      {/* Placeholder for ControlButtons */}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-64">
        Control Buttons Components
      </div>
    </div>
  );
}

export default App;
