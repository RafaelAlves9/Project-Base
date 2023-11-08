import { useEffect } from "react";
import { getLocalStorageProperty } from "@utils/getLocalStorageProperty";
import { Navigate, Outlet } from "react-router-dom";

type props = {
  roleRoute: string;
};

const AuthRequiredRoutes = ({ roleRoute }: props) => {
  const id = getLocalStorageProperty("user", "id");
  const role = getLocalStorageProperty("user", "role");

  const isAuthorized = () => {
    if (role && id && role === roleRoute) {
      return true;
    } else {
      return false;
    };
  };

  useEffect(() => {
    isAuthorized();
  }, [id]);

  if (isAuthorized()) {
    return <Outlet />;
  } else {
    return <Navigate to="/not-autorization"/>;
  };
};

export default AuthRequiredRoutes;