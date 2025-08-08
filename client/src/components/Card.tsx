import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export default function Card({
  children,
  className = "",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm p-5 transition-all duration-200",
        hoverable && "hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
