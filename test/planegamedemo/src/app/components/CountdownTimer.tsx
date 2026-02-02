import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  endTime: number | null;
  onComplete: () => void;
}

export default function CountdownTimer({ endTime, onComplete }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (!endTime) {
      setTimeRemaining(0);
      return;
    }

    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        onComplete();
      }
    };

    // Update immediately
    updateTimer();

    // Then update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [endTime, onComplete]);

  if (timeRemaining <= 0) return null;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="font-['GenSenRounded_TW:H',sans-serif] text-[60px] text-white">
      {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}
