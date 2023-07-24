"use client";

import { use, useTransition } from "react";
import { addCookie } from "./addCookie";

function Button() {
  const [_isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      addCookie();
    });
  }

  return <button onClick={handleClick}>Cookie Me</button>;
}

export default Button;
