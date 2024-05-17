import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

const Authentication = (props) => {
  const auth = useAuth();

  if (auth.user) {
    return <>{props.children}</>;
  } else {
    return <Navigate to='/login' />;
  }
};

export default Authentication;
