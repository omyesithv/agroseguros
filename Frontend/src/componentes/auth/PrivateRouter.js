import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from '../router/Path';
import {useAuthContext} from '../context/authContext';

export default function PrivateRoute() {
  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}