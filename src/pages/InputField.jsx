import React from "react";

export default function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-700 ml-1"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="
          w-full px-4 py-3 rounded-xl
          border border-slate-200
          bg-slate-50/50
          focus:bg-white
          focus:ring-4 focus:ring-blue-500/10
          focus:border-blue-500
          transition-all duration-200
          outline-none
        "
      />
    </div>
  );
}
