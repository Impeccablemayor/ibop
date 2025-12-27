import Sidebar from "../components/Sidebar";
import KpiCard from "../components/KpiCard";

function AdminDashboard() {
  const kpis = [
    { label: "Total Users", value: "--" },
    { label: "Active Clients", value: "--" },
    { label: "Pending Tasks", value: "--" },
    { label: "Completed Tasks", value: "--" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {kpis.map(kpi => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-4">
            Recent Activity
          </h3>

          <table className="w-full text-sm">
            <thead className="text-slate-500 border-b">
              <tr>
                <th className="text-left py-2">User</th>
                <th className="text-left py-2">Action</th>
                <th className="text-left py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Admin</td>
                <td className="py-2">Created a task</td>
                <td className="py-2">2 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
