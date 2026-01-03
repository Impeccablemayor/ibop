import { useState } from "react";

export default function CreateUserModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "Staff",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await onSubmit(form);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        role: "Staff",
      });
      onClose();
    } catch (err) {
      setError(
        err?.response?.data || "Failed to create user. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 border">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Create User
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <input
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              value={form.firstName}
              required
              className="w-1/2 border rounded-lg px-3 py-2 text-sm"
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              value={form.lastName}
              required
              className="w-1/2 border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            value={form.email}
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />

          <select
            name="role"
            onChange={handleChange}
            value={form.role}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Staff">Staff</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="text-sm text-slate-600 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-60"
            >
              {isLoading ? "Creating..." : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
