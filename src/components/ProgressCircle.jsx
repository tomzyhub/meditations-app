import { useState, useEffect } from "react";

function ProgressCircle({ duration, isRunning }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;

    //checking if isrunning is true and if duration is > 0
    if (isRunning) {
      if (duration > 0) {
        let timeLeft = duration * 60; // Convert minutes to seconds
        interval = setInterval(() => {
          timeLeft -= 1;
          const newProgress = (timeLeft / (duration * 60)) * 100;
          setProgress(newProgress);

          if (timeLeft <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, duration]);

  //reset progress to 0 if isrunning is false
  useEffect(() => {
    if (!isRunning) {
      setProgress(0); // Reset progress when stopped
    }
  }, [isRunning]);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center mt-5">
      <svg
        className="mt-6 bg-white shadow rounded-full w-40 h-40 flex items-center justify-center"
        width="80%"
        height="80%"
        viewBox="0 0 36 36"
      >
        <circle
          className="text-gray-200"
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
        <circle
          className="text-blue-500"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={`${100 - progress}`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="16"
          cx="18"
          cy="18"
        />
      </svg>
      <span className="absolute text-xl font-semibold text-gray-800">
        {Math.round(progress)}%
      </span>
    </div>
  );
}

export default ProgressCircle;
