import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  disabled?: boolean;
  className?: string;
};

const baseStyles =
  "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";

const variants: Record<string, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm",
  secondary:
    "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 shadow-sm",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
