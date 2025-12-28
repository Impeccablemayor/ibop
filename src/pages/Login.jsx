function Login() {
    return (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-100">
        
        {/* Left Panel */}
        <div className="hidden md:flex flex-col justify-center px-16 bg-slate-50">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Internal Ops
          </h1>
          <p className="text-slate-600 text-lg">
            Manage internal operations with clarity.
          </p>
        </div>
  
        {/* Right Panel */}
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 w-full max-w-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Sign in to your account
            </h2>
  
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-sm text-slate-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
              <a href="/forgot-password" className="text-sm text-blue-600 hover:underline mb-6 block">
                Forgot your password?
              </a>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Login;