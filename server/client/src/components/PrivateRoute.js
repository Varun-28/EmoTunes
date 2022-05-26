import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return !token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
