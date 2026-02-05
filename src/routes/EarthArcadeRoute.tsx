import { Outlet, useLocation } from 'react-router-dom';
import EarthArcadeMapLayout from 'layout/EarthArcadeMapLayout';
import EarthArcadeMapStatusLayout from 'layout/EarthArcadeMapStatusLayout';
import 'assets/css/earth-arcade.css';

const PC_PAGE_LIST = ['/earth-arcade/map'];
const MOBILE_PAGE_LIST = ['/earth-arcade/map-status'];

interface EarthArcadeRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const EarthArcadeRoute = ({ isLoading, setIsLoading }: EarthArcadeRouteProps) => {
  const location = useLocation();

  // 현재 url path
  const currentPath = location.pathname;

  return (
    <>
      {PC_PAGE_LIST.includes(currentPath) && (
        <EarthArcadeMapLayout isLoading={isLoading} setIsLoading={setIsLoading}>
          <Outlet context={{ isLoading, setIsLoading }} />
        </EarthArcadeMapLayout>
      )}
      {MOBILE_PAGE_LIST.includes(currentPath) && (
        <EarthArcadeMapStatusLayout isLoading={isLoading} setIsLoading={setIsLoading}>
          <Outlet context={{ isLoading, setIsLoading }} />
        </EarthArcadeMapStatusLayout>
      )}
    </>
  );
};

export default EarthArcadeRoute;
