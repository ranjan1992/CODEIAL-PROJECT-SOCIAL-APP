import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';
function PrivateRoute() {
  const auth = useAuth();

  if (auth.user) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
