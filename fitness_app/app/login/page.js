'use client';

import { useState } from 'react';

import jwt from 'jsonwebtoken';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState(null);
  const router = useRouter();

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (response.ok) {
        const data = await response.json();
        const decodedToken = jwt.decode(data.token);

        if (!decodedToken || !decodedToken.id) {
          setMessage({ type: 'error', text: 'Invalid token received.' });
          return;
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', decodedToken.id);

        setMessage({ type: 'success', text: 'Login successful!' });
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Login failed!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    }
  };

  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Registration successful! Redirecting to login...' });
        setTimeout(() => setIsLogin(true), 1500);
      } else {
        const data = await response.json();
        setMessage({ type: 'error', text: data.message || 'Registration failed!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div
      className="flex h-screen  p-5 px-40 bg-black object-cover"
      style={{ backgroundImage: "url('/images/bg-gym.webp')" }}
    >
      {/* Left Section: Form */}
      <div className="w-1/2 p-10 bg-gray-200">
        <div className="flex flex-col justify-center items-center p-10 bg-[#C0C0C0] rounded-xl bg-opacity-70 shadow-2xl text-center">
          <Image
            src="/images/logogym.png"
            alt="Workout Model"
            className="object-fit"
            width={200}
            height={200}
          />
          <h1 className="text-3xl font-bold">Fitness Freak</h1>
          <p className="text-gray-600 my-4">
            {isLogin
              ? 'Track your fitness goals and progress effortlessly.'
              : 'Join us and start your fitness journey today!'}
          </p>

          {message && (
            <p
              className={`mb-4 text-center ${
                message.type === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message.text}
            </p>
          )}

          <form
            className="w-full max-w-sm"
            onSubmit={isLogin ? handleLogin : handleRegister}
          >
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 mb-10"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          <p className="text-gray-600">
            {isLogin ? (
              <>
                Not registered with us?{' '}
                <span
                  className="text-indigo-700 font-bold  cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered with us?{' '}
                <span
                  className="text-indigo-700 font-bold cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Log In
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-1/2 bg-gray-200">
        <Image
          src="/images/img1.png"
          alt="Workout Model"
          className="object-cover h-full"
          width={600}
          height={800}
        />
      </div>
    </div>
  );
}
