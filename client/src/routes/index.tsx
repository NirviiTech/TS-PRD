// src/routes/index.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/auth/Login';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import AccountantDashboard from '../pages/dashboard/AccountantDashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/dashboard/accountant" element={<AccountantDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
