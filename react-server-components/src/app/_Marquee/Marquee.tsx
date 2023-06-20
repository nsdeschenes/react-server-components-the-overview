"use client";

import { useState, useEffect } from "react";

function Marquee() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = new Date();
      setDate(`${temp.toLocaleDateString()} - ${temp.toLocaleTimeString()}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="marquee">
      <p>
        This app is built with React Server Components (and Next) 🎉 Today&apos;
        date is: {date}
      </p>
    </div>
  );
}

export default Marquee;
