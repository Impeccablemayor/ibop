import React from 'react';

export const Table = ({ children, className = '' }) => (
  <table className={`w-full border-collapse ${className}`}>
    {children}
  </table>
);

export const TableHead = ({ children, className = '' }) => (
  <thead className={className}>
    {children}
  </thead>
);

export const TableBody = ({ children, className = '' }) => (
  <tbody className={className}>
    {children}
  </tbody>
);

export const TableHeader = ({ children, className = '' }) => (
  <th className={`px-4 py-2 text-left font-semibold text-gray-700 border-b ${className}`}>
    {children}
  </th>
);

export const TableRow = ({ children, className = '' }) => (
  <tr className={`border-b hover:bg-gray-50 ${className}`}>
    {children}
  </tr>
);

export const TableCell = ({ children, className = '' }) => (
  <td className={`px-4 py-3 text-gray-700 ${className}`}>
    {children}
  </td>
);
