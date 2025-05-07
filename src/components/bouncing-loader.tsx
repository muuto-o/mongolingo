import React from "react";

type BouncingLoaderProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent" | "white";
  className?: string;
};

const BouncingLoader: React.FC<BouncingLoaderProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  };

  const colorClasses = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    accent: "bg-indigo-500",
    white: "bg-white",
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
          style={{
            animation: `bounce 1.5s infinite ease-in-out`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
