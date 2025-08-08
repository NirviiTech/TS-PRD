import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function OAuth() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate OAuth token exchange and login
    setTimeout(() => {
      login({ id: "USR002", name: "OAuth User", role: "Accountant" });
      navigate("/dashboard/accountant");
    }, 1500);
  }, [login, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">Authorizing...</p>
        <div className="mt-4 animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-500 mx-auto"></div>
      </div>
    </div>
  );
}
