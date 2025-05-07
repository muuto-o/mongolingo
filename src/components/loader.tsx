import React from "react";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent" | "white";
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const colorClasses = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    accent: "text-indigo-500",
    white: "text-white",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses[size]} ${colorClasses[color]}`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
