"use client";
import '@/app/globals.css';
import Link from 'next/link';
import { useState } from 'react';
import useLogin from '@/app/hooks/useLogin';

function Login() {
  // Manage username and password state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Destructure loading state and login function from useLogin hook
  const { loading, login } = useLogin();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function with username and password
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Centering the component */} 
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">VibeConnect</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}  // Disable input during loading
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}  // Disable input during loading
            />
          </div>
          <Link
            href={'/signup'}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            style={{ color: "white" }}
          >
            Don't have an account?
          </Link>
          <div className="mt-4">
            <button
              className="btn btn-block btn-sm"
              type="submit"
              disabled={loading || !username || !password}  // Disable button if loading or fields are empty
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
