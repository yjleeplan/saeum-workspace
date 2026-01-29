import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import OnlineCheckRoute from './OnlineCheckRoute';
import EarthArcadeRoute from './EarthArcadeRoute';
import NehemRoadRoute from './NehemRoadRoute';
import BibleWalk2023Admin from 'pages/bible-walk/bible-walk-2023/admin/Admin';
import BibleWalk2023Main from 'pages/bible-walk/bible-walk-2023/main/Main';
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
      {/* 온라인 출석 (특새/가을성경산책) */}
      <Route element={<OnlineCheckRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/bible-walk/2023'} element={<BibleWalk2023Main />} />
        <Route path={'/bible-walk/2023/admin'} element={<BibleWalk2023Admin />} />
      </Route>

      {/* 지구오락실 (2023년 청년부 여름수련회) */}
      <Route element={<EarthArcadeRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/earth-arcade/map'} element={<EarthArcadeMap />} />
        <Route path={'/earth-arcade/map-status'} element={<EarthArcadeMapStatus />} />
      </Route>

      {/* 네헴로드 (2025년 청년부 여름수련회) */}
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
