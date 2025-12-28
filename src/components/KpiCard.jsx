export default function KpiCard({ label, value }) {
    return (
      <div className="bg-white border rounded-xl p-6">
        <div className="text-3xl font-bold text-slate-900">
          {value}
        </div>
        <div className="text-slate-500 mt-1">
          {label}
        </div>
      </div>
    );
  }
  