import MapLayout from 'layout/MapLayout';
import { Outlet } from 'react-router-dom';

interface MapRouteProps {
  isLoading: boolean;
  setIsLoading: (data: boolean) => void;
}

const MapRoute = ({ isLoading, setIsLoading }: MapRouteProps) => {
  return (
    <MapLayout isLoading={isLoading} setIsLoading={setIsLoading}>
      <Outlet />
    </MapLayout>
  );
};

export default MapRoute;
