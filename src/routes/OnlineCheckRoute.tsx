import { Outlet, useLocation } from 'react-router-dom';
import OnlineCheckLayout from 'layout/OnlineCheckLayout';
import 'assets/css/online-check.css';
import 'assets/css/online-check-service.css';

const MAIN_PAGE_LIST = [
  '/dawn-worship-17th',
  '/dawn-worship-20th',
  '/dawn-worship-21th',
  '/bible-walk-2022',
  '/bible-walk-2023',
];
const ADMIN_PAGE_LIST = [
  '/dawn-worship-17th/admin',
  '/dawn-worship-20th/admin',
  '/dawn-worship-21th/admin',
  '/bible-walk-2022/admin',
  '/bible-walk-2023/admin',
];

interface OnlineCheckRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const OnlineCheckRoute = ({ isLoading, setIsLoading }: OnlineCheckRouteProps) => {
  const location = useLocation();

  // 현재 url path
  const currentPath = location.pathname;

  // 서비스명 가져오기
  const getServiceName = () => {
    let className = '';

    // 특새 (17차)
    if (['/dawn-worship-17th', '/dawn-worship-17th/admin'].includes(currentPath)) {
      className = 'dawn-worship-17th';
    }
    // 특새 (20차)
    if (['/dawn-worship-20th', '/dawn-worship-20th/admin'].includes(currentPath)) {
      className = 'dawn-worship-20th';
    }
    // 특새 (21차)
    if (['/dawn-worship-21th', '/dawn-worship-21th/admin'].includes(currentPath)) {
      className = 'dawn-worship-21th';
    }
    // 가을성경산책 (2022년)
    if (['/bible-walk-2022', '/bible-walk-2022/admin'].includes(currentPath)) {
      className = 'bible-walk-2022';
    }
    // 가을성경산책 (2023년)
    if (['/bible-walk-2023', '/bible-walk-2023/admin'].includes(currentPath)) {
      className = 'bible-walk-2023';
    }

    return className;
  };

  return (
    <OnlineCheckLayout
      serviceName={getServiceName()}
      isLoading={isLoading}
      isAdmin={ADMIN_PAGE_LIST.includes(currentPath)}
      setIsLoading={setIsLoading}
    >
      <Outlet context={{ isLoading, setIsLoading }} />
    </OnlineCheckLayout>
  );
};

export default OnlineCheckRoute;
