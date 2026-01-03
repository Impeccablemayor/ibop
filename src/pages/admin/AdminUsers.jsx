import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import CreateUserModal from "../../components/CreateUserModal";
import { fetchUsers } from "../../services/userService";

function AdminUsers() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to load users. Please refresh.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreateUser = async (data) => {
    // later: await createUser(data)
    await new Promise(res => setTimeout(res, 800));
    await loadUsers();
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          User Management
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm"
        >
          Create User
        </button>
      </div>

      <div className="bg-white border rounded-xl p-6">
        {loading && (
          <p className="text-sm text-slate-500">Loading users...</p>
        )}

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="text-sm text-slate-500">
            No users found.
          </p>
        )}

        {!loading && !error && users.length > 0 && (
          <table className="w-full text-sm">
            <thead className="text-slate-500 border-b">
              <tr>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Role</th>
                <th className="text-left py-2">Status</th>
                <th className="text-right py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b">
                  <td className="py-2">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.role}</td>
                  <td className="py-2">
                    <span
                      className={
                        user.isActive
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-2 text-right space-x-3">
                    <button className="text-slate-600 underline">
                      {user.isActive ? "Deactivate" : "Activate"}
                    </button>
                    <button className="text-red-600 underline">
                      Reset Password
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <CreateUserModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleCreateUser}
      />
    </AdminLayout>
  );
}

export default AdminUsers;
