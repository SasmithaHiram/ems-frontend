import React from 'react'
import useLogin from "../hooks/useLogin.js";

const Login = () => {
    const {setEmail, setPassword, email, password, handleSubmit} = useLogin();

    return (
        <div
            className="min-h-screen w-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 flex items-center justify-center px-4">
            {/* Login Card */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 w-full max-w-md border border-gray-200">
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
                    Employee Management
                </h2>
                <p className="text-center text-gray-600 mb-8 text-sm">
                    Sign in to manage your workforce
                </p>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium text-sm">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-indigo-500"/>
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:text-indigo-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-xs mt-8">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </div>
    );
}
export default Login
