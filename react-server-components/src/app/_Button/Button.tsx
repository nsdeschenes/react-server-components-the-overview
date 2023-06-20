"use client";

import { useState } from "react";
import { addOne } from "./addOne";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    addOne(count).then((newCount) => {
      setCount(newCount);
    });
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}

export default Button;
