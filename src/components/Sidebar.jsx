import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
  { label: "Dashboard", path: "/admin" },
  { label: "Users", path: "/admin/users" },
  { label: "Clients", path: "/admin/clients" },
  { label: "Tasks", path: "/admin/tasks" },
  { label: "Activity", path: "/admin/activity" }
];

    return (
      <aside className="w-56 bg-white border-r">
        <div className="p-6 font-bold text-slate-900">
          Internal Ops
        </div>
        <nav className="px-4 space-y-3 text-slate-600">
          {menu.map(item => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `block hover:text-slate-900 ${
                  isActive ? 'text-blue-900 font-medium' : ""
                }`
            }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    );
  }
  