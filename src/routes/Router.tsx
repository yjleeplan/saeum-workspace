import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import MainRoute from './MainRoute';
import EarthArcadeRoute from './EarthArcadeRoute';
import NehemRoadRoute from './NehemRoadRoute';
import Admin from 'pages/admin/Admin';
import Main from 'pages/main/Main';
import NehemRoadHome from 'pages/retreat/nehem-road/home/Home';
import NehemRoadReserveTheme from 'pages/retreat/nehem-road/reserve-theme/ReserveTheme';
import NehemRoadReservePlan from 'pages/retreat/nehem-road/reserve-plan/ReservePlan';
import NehemRoadReserveMap from 'pages/retreat/nehem-road/reserve-map/ReserveMap';
import NehemRoadReserveCheck from 'pages/retreat/nehem-road/reserve-check/ReserveCheck';
import NehemRoadContact from 'pages/retreat/nehem-road/contact/Contact';
import NehemRoadAdmin from 'pages/retreat/nehem-road/admin/Admin';
import NehemRoadReserveByGame from 'pages/retreat/nehem-road/admin/ReserveByGame';
import EarthArcadeMap from 'pages/retreat/earth-arcade/map/Map';
import EarthArcadeMapStatus from 'pages/retreat/earth-arcade/map-status/MapStatus';

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 접속 기기 체크
  const mobileCheck = (): boolean => /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <Routes>
      {/* <Route element={<MainRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/'} element={<Main setIsLoading={setIsLoading} />} />
        <Route path={'/main'} element={<Main setIsLoading={setIsLoading} />} />
      </Route> */}

      {/* <Route element={<AdminRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/admin'} element={<Admin setIsLoading={setIsLoading} />} />
      </Route> */}

      {/* 지구오락실 (2023년 8월 청년부 여름수련회) */}
      <Route element={<EarthArcadeRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/earth-arcade/map'} element={<EarthArcadeMap />} />
        <Route path={'/earth-arcade/map-status'} element={<EarthArcadeMapStatus />} />
      </Route>

      {/* 네헴로드 (2025년 8월 청년부 여름수련회) */}
      <Route element={<NehemRoadRoute isMobile={mobileCheck()} isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/nehem-road/home'} element={<NehemRoadHome />} />
        <Route path={'/nehem-road/reserve-theme'} element={<NehemRoadReserveTheme />} />
        <Route path={'/nehem-road/reserve-plan'} element={<NehemRoadReservePlan />} />
        <Route path={'/nehem-road/reserve-location'} element={<NehemRoadReserveMap />} />
        <Route path={'/nehem-road/reserve-check'} element={<NehemRoadReserveCheck />} />
        <Route path={'/nehem-road/contact'} element={<NehemRoadContact />} />
        <Route path={'/nehem-road/admin'} element={<NehemRoadAdmin />} />
        <Route path={'/nehem-road/admin/reserve'} element={<NehemRoadReserveByGame />} />
      </Route>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
