import MainLayout from 'layout/MainLayout';
import { Outlet } from 'react-router-dom';

interface MainRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const MainRoute = ({ isLoading, setIsLoading }: MainRouteProps) => {
  return (
    <MainLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </MainLayout>
  );
};

export default MainRoute;
