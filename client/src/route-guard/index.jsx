import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ authenticate, element , user}) => {
    console.log(authenticate)
  const location = useLocation();

  if (!authenticate && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  if (authenticate && user?.role !== 'admin' && ( location.pathname.includes('admin') || location.pathname.includes('/auth')   )) {
    return <Navigate to="/home" replace />;

  }

  if(authenticate && user?.role === 'admin' && !location.pathname.includes('/admin')){
    return <Navigate to="/admin" replace />
  }


  return element;
};

export default RouteGuard;
