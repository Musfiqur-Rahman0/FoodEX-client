import React, { useEffect, useState } from "react";

// dayjs.extend(duration);

const CountDown = ({ isoDate }) => {
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(isoDate).getTime();
      let diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft("");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff %= 1000 * 60 * 60 * 24;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff %= 1000 * 60 * 60;
      const minutes = Math.floor(diff / (1000 * 60));
      diff %= 1000 * 60;
      const seconds = Math.floor(diff / 1000);
      const formated = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimeLeft(formated);
    }, 1000);
    return () => clearInterval(interval);
  }, [isoDate]);
  return timeLeft ? (
    <div className="flex items-center gap-2">
      <span>Time remaning : </span> {timeLeft}
    </div>
  ) : null;
};

export default CountDown;
