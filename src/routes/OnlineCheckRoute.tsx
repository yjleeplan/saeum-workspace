import { Outlet, useLocation } from 'react-router-dom';
import OnlineCheckLayout from 'layout/OnlineCheckLayout';
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
    <OnlineCheckLayout
      isLoading={isLoading}
      isAdmin={ADMIN_PAGE_LIST.includes(currentPath)}
      setIsLoading={setIsLoading}
    >
      <Outlet context={{ isLoading, setIsLoading }} />
    </OnlineCheckLayout>
  );
};

export default OnlineCheckRoute;
