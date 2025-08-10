import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { JSX } from "react";

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default PrivateRoute;
