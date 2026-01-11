import React, { useState } from 'react';

// 1. Sub-component for form fields to reduce repetition (DRY)
const InputField = ({ label, type, value, onChange, placeholder, id }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label htmlFor={id} className="text-sm font-medium text-slate-700 ml-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 
                 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 
                 transition-all duration-200 outline-none"
      required
    />
  </div>
);

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 font-sans antialiased">
      
      {/* Left Section: Branding & Visuals */}
      <aside className="hidden lg:flex flex-1 relative overflow-hidden bg-[#0F172A]">
        {/* Abstract background shapes for a premium feel */}
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

      {/* Right Section: Form */}
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
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              
              <div className="space-y-1">
                <InputField 
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <div className="flex justify-end">
                  <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>

            <button
              disabled={isLoading}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-200
                ${isLoading 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]'
                }`}
            >
              {isLoading ? 'Signing in...' : 'Sign in to Dashboard'}
            </button>
          </form>

          <footer className="text-center">
            <p className="text-slate-500 text-sm">
              Don't have an account? {' '}
              <a href="/request" className="text-blue-600 font-semibold hover:underline">Request access</a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}