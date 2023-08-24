
"use client";
import { useState } from "react";

export default function AutoUpdateButton({
  isAutoUpdateOn,
  setIsAutoUpdateOn
}: {
  isAutoUpdateOn: boolean;
  setIsAutoUpdateOn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <button onClick={() => setIsAutoUpdateOn(!isAutoUpdateOn)}>
        {isAutoUpdateOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

