import { Outlet, useLocation } from 'react-router-dom';
import OnlineCheckMainLayout from 'layout/OnlineCheckMainLayout';
import OnlineCheckAdminLayout from 'layout/OnlineCheckAdminLayout';
import 'assets/css/online-check.css';

const MAIN_PAGE_LIST = ['/bible-walk/2023'];
const ADMIN_PAGE_LIST = ['/bible-walk/2023/admin'];

interface OnlineCheckRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const OnlineCheckRoute = ({ isLoading, setIsLoading }: OnlineCheckRouteProps) => {
  const location = useLocation();

  // 현재 url path
  const currentPath = location.pathname;

  return (
    <>
      {MAIN_PAGE_LIST.includes(currentPath) && (
        <OnlineCheckMainLayout isLoading={isLoading} setIsLoading={setIsLoading}>
          <Outlet context={{ isLoading, setIsLoading }} />
        </OnlineCheckMainLayout>
      )}
      {ADMIN_PAGE_LIST.includes(currentPath) && (
        <OnlineCheckAdminLayout isLoading={isLoading} setIsLoading={setIsLoading}>
          <Outlet context={{ isLoading, setIsLoading }} />
        </OnlineCheckAdminLayout>
      )}
    </>
  );
};

export default OnlineCheckRoute;
