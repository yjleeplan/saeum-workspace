import NehemRoadLayout from 'layout/NehemRoadLayout';
import { Outlet } from 'react-router-dom';

interface NehemRoadRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const NehemRoadRoute = ({ isLoading, setIsLoading }: NehemRoadRouteProps) => {
  return (
    <NehemRoadLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </NehemRoadLayout>
  );
};

export default NehemRoadRoute;
