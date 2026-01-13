import MapStatusLayout from 'layout/MapStatusLayout';
import { Outlet } from 'react-router-dom';

interface MapStatusRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const MapStatusRoute = ({ isLoading, setIsLoading }: MapStatusRouteProps) => {
  return (
    <MapStatusLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </MapStatusLayout>
  );
};

export default MapStatusRoute;
