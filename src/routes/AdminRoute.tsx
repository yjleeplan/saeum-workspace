import AdminLayout from 'layout/AdminLayout';
import { Outlet } from 'react-router-dom';

interface AdminRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const AdminRoute = ({ isLoading, setIsLoading }: AdminRouteProps) => {
  return (
    <AdminLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminRoute;
