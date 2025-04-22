import React from "react";

interface MongolianScriptProps extends React.HTMLAttributes<HTMLDivElement> {
  script: string;
}

export default function MongolianScript({
  script,
  className = "",
  ...props
}: MongolianScriptProps) {
  return (
    <div
      className={`transform rotate-90 inline-block origin-center ${className}`}
      {...props}
    >
      {script}
    </div>
  );
}
