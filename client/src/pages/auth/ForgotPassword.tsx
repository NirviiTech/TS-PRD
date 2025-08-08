import React, { useState } from "react";
import Button from "../../components/Button";
import { isEmail } from "../../utils/validator";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setMessage("If an account exists, a password reset link has been sent.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-6 text-pink-600">
          Forgot your password?
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-600 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <Button type="submit" variant="primary" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
}
