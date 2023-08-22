"use client";

import { useState } from "react";

export default function SaveButton() { 
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Save Current Weather Data</button>
    </div>
  );
}
