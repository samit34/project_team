import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
const Private = ({ children, requiredRole }) => {
  console.log("this is a required role", requiredRole)
  console.log("this is a private route")
  const { isauth, role , loading } = useAuth();
  if(loading) {
    return <div>Loading...</div>;
    }
  if (!isauth) {
    return <Navigate to="/login" replace />;
  }
  // Check if the user's role matches the required role for the route
  if (requiredRole && role !== requiredRole) {
    console.log("this is a role", role)
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Private;
