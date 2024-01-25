import React from "react";

export function Receipt(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-receipt"
      viewBox="0 0 24 24"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"></path>
      <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8M12 17.5v-11"></path>
    </svg>
  );
}
