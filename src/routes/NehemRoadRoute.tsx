import NehemRoadLayout from 'layout/NehemRoadLayout';
import { Outlet } from 'react-router-dom';

interface NehemRoadRouteProps {
  isMobile: boolean;
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadRoute = ({ isMobile, isLoading, setIsLoading }: NehemRoadRouteProps) => {
  return (
    <NehemRoadLayout isMobile={isMobile} isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </NehemRoadLayout>
  );
};

export default NehemRoadRoute;
