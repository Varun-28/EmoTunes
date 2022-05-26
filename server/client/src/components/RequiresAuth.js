import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
