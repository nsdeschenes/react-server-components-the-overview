import { useEffect, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(() => {
    const temp = new Date();
    return `${temp.toLocaleDateString()} - ${temp.toLocaleTimeString()}`;
  });

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
    <>
      <h1>Dynamic SPA</h1>
      <div className="marquee">
        <p>
          This webpage was built with Vite + React 🎉 Today&apos; date is:{" "}
          {date}
        </p>
      </div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </>
  );
}
