import React, { useState, lazy, Suspense } from "react";
import api from "@/api/axiosInstance"; // your axiosInstance with JWT
import InputField from "./InputField"; // your existing input component

// Lazy-loaded dashboards
const AdminDashboard = lazy(() => import("@/pages/dashboards/AdminDashboard"));
// const ManagerDashboard = lazy(() => import("@/pages/dashboards/ManagerDashboard"));
// const StaffDashboard = lazy(() => import("@/pages/dashboards/StaffDashboard"));

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = res.data;

      // Save token & user info
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserRole(user.role);

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Show dashboard after login
  if (userRole) {
    return (
      <Suspense fallback={<div>Loading dashboard...</div>}>
        {userRole === "admin" && <AdminDashboard />}
        {userRole === "manager" && <ManagerDashboard />}
        {userRole === "staff" && <StaffDashboard />}
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans antialiased">
      {/* Left Section */}
      <aside className="hidden lg:flex flex-1 relative overflow-hidden bg-[#0F172A]">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tight">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span>InternalOps</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Manage operations <br />
              <span className="text-blue-400">without the friction.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-md">
              The unified dashboard for tracking internal metrics, logistics, and team performance in real-time.
            </p>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 InternalOps Inc. All rights reserved.
          </div>
        </div>
      </aside>

      {/* Right Section */}
      <main className="flex-[0.8] flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-[440px] space-y-8">
          <header className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
            <p className="text-slate-500">Enter your credentials to access your dashboard</p>
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <InputField
                id="email"
                label="Work Email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="space-y-1">
                <InputField
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>

            <button
              disabled={isLoading}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-200
                ${isLoading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
                }`}
            >
              {isLoading ? "Signing in..." : "Sign in to Dashboard"}
            </button>
          </form>

          <footer className="text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account?{" "}
              <a href="/request" className="text-blue-600 font-semibold hover:underline">
                Request access
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
