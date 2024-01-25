import React from "react";

export function Map(): React.ReactElement {
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
      className="lucide lucide-map"
      viewBox="0 0 24 24"
    >
      <path d="M3 6L9 3 15 6 21 3 21 18 15 21 9 18 3 21z"></path>
      <path d="M9 3L9 18"></path>
      <path d="M15 6L15 21"></path>
    </svg>
  );
}

