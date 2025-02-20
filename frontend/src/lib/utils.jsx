import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

const UtilityDemo = () => {
  const sampleDate = "2025-02-20";
  const formattedDate = formatDate(sampleDate);
  const samplePath = "/home";
  const fullUrl = absoluteUrl(samplePath);

  return (
    <div className={cn("p-4", "bg-gray-100", "rounded-lg")}>
      <h1 className="text-xl font-bold">Utility Functions Demo</h1>
      <p><strong>Formatted Date:</strong> {formattedDate}</p>
      <p><strong>Absolute URL:</strong> {fullUrl}</p>
    </div>
  );
};

export default UtilityDemo;