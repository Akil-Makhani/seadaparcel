import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItemLocalStorage } from "../utils/browserSetting.jsx";

export default function ProtectedRoute({ allowRoles }) {
  const token = getItemLocalStorage("token");
  const role = getItemLocalStorage("role");

  if (!token) {
    return <Navigate to={role === "Admin" ? "/admin/login" : "/login"} replace />;
  }

  if (allowRoles && !allowRoles.includes(role)) {
    const redirectPath = role === "Admin" ? "/admin/dashboard" : "/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}


