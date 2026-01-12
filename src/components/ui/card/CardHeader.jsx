// src/components/ui/card/CardHeader.jsx
import React from "react";

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`p-4 border-b border-slate-200 ${className}`}>
      {children}
    </div>
  );
}
