// src/components/ui/card/CardTitle.jsx
import React from "react";

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-lg font-semibold text-slate-900 ${className}`}>
      {children}
    </h2>
  );
}
