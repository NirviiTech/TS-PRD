import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AccountantLayout from "../layouts/AccountantLayout";
import Login from "../pages/auth/Login";
import OAuth from "../pages/auth/OAuth";
import ForgotPassword from "../pages/auth/ForgotPassword";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AccountantDashboard from "../pages/dashboard/AccountantDashboard";
import ClientList from "../pages/clients/ClientList";
import ClientDetail from "../pages/clients/ClientDetail";
import ClientForm from "../pages/clients/ClientForm";
import EmployeeTable from "../pages/employees/EmployeeTable";
import ProjectCreate from "../pages/projects/ProjectCreate";
import ProjectAllocation from "../pages/projects/ProjectAllocation";
import InvoiceGenerate from "../pages/invoices/InvoiceGenerate";
import BillingAnalytics from "../pages/reports/BillingAnalytics";
import Profitability from "../pages/reports/Profitability";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/oauth" element={<OAuth />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<ClientList />} />
          <Route path="clients/new" element={<ClientForm />} />
          <Route path="clients/:id" element={<ClientDetail />} />
          <Route path="employees" element={<EmployeeTable />} />
          <Route path="projects/create" element={<ProjectCreate />} />
          <Route path="allocations" element={<ProjectAllocation />} />
          <Route path="reports/billing" element={<BillingAnalytics />} />
          <Route path="reports/profitability" element={<Profitability />} />
        </Route>

        <Route path="/dashboard/accountant" element={<AccountantLayout />}>
          <Route index element={<AccountantDashboard />} />
          <Route path="invoices/generate" element={<InvoiceGenerate />} />
        </Route>
      </Routes>
  );
}
