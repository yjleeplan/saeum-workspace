import ComeLetUsBuildLayout from 'layout/ComeLetUsBuildLayout';
import { Outlet } from 'react-router-dom';

interface ComeLetUsBuildRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const ComeLetUsBuildRoute = ({ isLoading, setIsLoading }: ComeLetUsBuildRouteProps) => {
  return (
    <ComeLetUsBuildLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </ComeLetUsBuildLayout>
  );
};

export default ComeLetUsBuildRoute;
