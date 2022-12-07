import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ Component: Component }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
