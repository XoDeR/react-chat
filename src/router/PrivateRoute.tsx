import { Navigate } from "react-router-dom";

interface IPrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = "/authentication",
}: IPrivateRouteProps) => {
  const isLoggedIn = false;
  const currentUser = null;

  return isLoggedIn && currentUser /*&& currentUser?.displayName*/ ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
