import { Suspense, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useChatStore from "@store/Store";

interface IRestrictedRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: IRestrictedRouteProps) => {
  const isLoggedIn = useChatStore((state) => state.isLoggedIn);
  const currentUser = useChatStore((state) => state.currentUser);

  useEffect(() => {
    if (currentUser && currentUser.displayName) {
      localStorage.removeItem("step");
    }
  }, [currentUser]);

  return (
    <>
      {isLoggedIn !== null && !currentUser.displayName && (
        <Suspense>
          <Component />
        </Suspense>
      )}
      {isLoggedIn === true && currentUser.displayName && (
        <Navigate to={redirectTo} />
      )}
    </>
  );
};

export default RestrictedRoute;
