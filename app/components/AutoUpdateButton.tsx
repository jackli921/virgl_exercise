
"use client";
import { useState } from "react";

export default function AutoUpdateButton() {
  const [isAutoUpdate, setIsAutoUpdate] = useState(true);

  return (
    <div>
      <button onClick={() => setIsAutoUpdate(!isAutoUpdate)}>
        {isAutoUpdate ? "True" : "False"}
      </button>
    </div>
  );
}
