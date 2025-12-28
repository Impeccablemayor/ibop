export default function Sidebar() {
    const menu = ["Dashboard", "Users", "Clients", "Tasks", "Activity"];
  
    return (
      <aside className="w-56 bg-white border-r">
        <div className="p-6 font-bold text-slate-900">
          Internal Ops
        </div>
        <nav className="px-4 space-y-3 text-slate-600">
          {menu.map(item => (
            <a
              key={item}
              className={`block hover:text-slate-900 ${
                item === "Dashboard" && "text-blue-600 font-medium"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
      
    );
  }
  