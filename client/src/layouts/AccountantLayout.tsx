import React from "react";  
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

export default function AdminLayout() {
  const { user, logout } = useAuth();

  const navItems = [
    { to: "/dashboard/admin", label: "Dashboard" },
    { to: "/clients", label: "Clients" },
    { to: "/employees", label: "Employees" },
    { to: "/projects/create", label: "Projects" },
    { to: "/allocations", label: "Allocations" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-indigo-600">KhaanaKart</h1>
          <p className="text-sm text-gray-500">{user?.name}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={logout}
            className="flex items-center text-sm text-red-600 hover:underline"
          >
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
