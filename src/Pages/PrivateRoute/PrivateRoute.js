import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    console.log("loading1", loading);
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!user && !loading) {
    console.log("loading2", loading, "user", user);
    return <Navigate to="/login" />;
  } else {
    console.log("elseloading2", loading, "user", user);
    return children;
  }
}
