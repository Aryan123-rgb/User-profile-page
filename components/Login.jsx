"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else console.log("not ok");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?
          <Link href={"/signup"} className="text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
