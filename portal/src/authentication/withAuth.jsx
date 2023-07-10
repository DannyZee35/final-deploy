import  { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const withAuth = (Component, allowedRoles) => {
  const AuthWrapper = (props) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
      if (!user) {
        navigate("/login") 
      } 
    else if (user.UserRole === "" && !allowedRoles.includes("")) {
      navigate("/");
    } 
    else if (user.UserRole === "course instructor" && !allowedRoles.includes("course instructor")) {
      navigate("/InstDashboard");
    } 
      else if (user.UserRole === "course coordinator" && !allowedRoles.includes("course coordinator")) {
        navigate("/dashboard");
      } else if (user.UserRole === "head of department" && !allowedRoles.includes("head of department")) {
        navigate("/hod-dashboard");convenor
      }
       else if (user.UserRole === "course folder coordinator" && !allowedRoles.includes("course folder convenor")) {
        navigate("/folder-dashboard");
      }
    }, [user, allowedRoles, navigate]);

    // Render the component if the user's role is allowed
    return allowedRoles.includes(user?.UserRole) ? (
      <Component {...props} />
    ) : null;
  };

  return AuthWrapper;
};
