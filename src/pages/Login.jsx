import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
            {/* Login Card */}
            <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md border border-white/30">
                <h2 className="text-2xl font-bold text-white text-center mb-4">Employee Management System</h2>
                <p className="text-center text-gray-200 mb-6">Sign in to manage employees efficiently</p>

                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-400/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/30 text-white placeholder-gray-300"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-200 mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-400/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/30 text-white placeholder-gray-300"
                        />
                    </div>

                    {/* Remember Me + Forgot Password */}
                    <div className="flex items-center justify-between text-gray-300 text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-green-400" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:text-green-400 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Optional Footer */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </div>
    );
}
export default Login
