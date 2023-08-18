import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = true; // Aqui você verifica se o usuário está autenticado

  if (isAuthenticated) {
    return <Layout>{children}</Layout>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
