import { useState, useEffect } from "react";

function ProgressCircle({ duration }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;

    if (duration > 0) {
      let timeLeft = duration * 60;

      interval = setInterval(() => {
        timeLeft -= 1;
        const newProgress = (timeLeft / (duration * 60)) * 100;
        setProgress(newProgress);

        if (timeLeft <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div>
      <p>ProgressCircle</p>
    </div>
  );
}

export default ProgressCircle;
