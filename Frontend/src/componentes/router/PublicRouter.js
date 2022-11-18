import {Navigate, Outlet} from 'react-router-dom';
import {PRIVATE} from '../router/Path';
import {useAuthContext} from '../context/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}