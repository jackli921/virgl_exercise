"use client";

import { useState } from "react";

export default function ShowButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Show Saved Temperatures
      </button>
    </div>
  );
}
