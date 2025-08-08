import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import MainRoute from './MainRoute';
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

      <Route element={<NehemRoadRoute isMobile={mobileCheck()} isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/nehem-road/home'} element={<NehemRoadHome isMobile={mobileCheck()} />} />
        <Route
          path={'/nehem-road/reserve-theme'}
          element={<NehemRoadReserveTheme isMobile={mobileCheck()} setIsLoading={setIsLoading} />}
        />
        <Route
          path={'/nehem-road/reserve-plan'}
          element={<NehemRoadReservePlan isMobile={mobileCheck()} setIsLoading={setIsLoading} />}
        />
        <Route
          path={'/nehem-road/reserve-location'}
          element={<NehemRoadReserveMap isMobile={mobileCheck()} setIsLoading={setIsLoading} />}
        />
        <Route
          path={'/nehem-road/reserve-check'}
          element={<NehemRoadReserveCheck isMobile={mobileCheck()} setIsLoading={setIsLoading} />}
        />
        <Route path={'/nehem-road/contact'} element={<NehemRoadContact isMobile={mobileCheck()} />} />
        <Route path={'/nehem-road/admin'} element={<NehemRoadAdmin isMobile={mobileCheck()} />} />
        <Route
          path={'/nehem-road/admin/reserve'}
          element={<NehemRoadReserveByGame isMobile={mobileCheck()} setIsLoading={setIsLoading} />}
        />
      </Route>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
