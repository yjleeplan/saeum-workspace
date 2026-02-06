import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import OnlineCheckRoute from './OnlineCheckRoute';
import EarthArcadeRoute from './EarthArcadeRoute';
import NehemRoadRoute from './NehemRoadRoute';
import DawnWorship17th from 'pages/online-check/dawn-worship-17th/DawnWorship17th';
import DawnWorship20th from 'pages/online-check/dawn-worship-20th/DawnWorship20th';
import DawnWorship20thAdminSetting from 'pages/online-check/dawn-worship-20th/AdminSetting';
import DawnWorship21th from 'pages/online-check/dawn-worship-21th/DawnWorship21th';
import BibleWalk2022 from 'pages/online-check/bible-walk-2022/BibleWalk2022';
import BibleWalk2023 from 'pages/online-check/bible-walk-2023/BibleWalk2023';
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
      {/* 온라인 출석 */}
      <Route element={<OnlineCheckRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        {/* 특새 (17차) */}
        <Route path={'/dawn-worship-17th'} element={<DawnWorship17th />} />
        <Route path={'/dawn-worship-17th/admin'} element={<DawnWorship17th isAdmin />} />
        {/* 특새 (20차) */}
        <Route path={'/dawn-worship-20th'} element={<DawnWorship20th />} />
        <Route path={'/dawn-worship-20th/admin'} element={<DawnWorship20th isAdmin />} />
        <Route path={'/dawn-worship-20th/admin/setting'} element={<DawnWorship20thAdminSetting />} />
        {/* 특새 (21차) */}
        <Route path={'/dawn-worship-21th'} element={<DawnWorship21th />} />
        <Route path={'/dawn-worship-21th/admin'} element={<DawnWorship21th isAdmin />} />
        {/* 가을성경산책 (2022년) */}
        <Route path={'/bible-walk-2022'} element={<BibleWalk2022 />} />
        <Route path={'/bible-walk-2022/admin'} element={<BibleWalk2022 isAdmin />} />
        {/* 가을성경산책 (2023년) */}
        <Route path={'/bible-walk-2023'} element={<BibleWalk2023 />} />
        <Route path={'/bible-walk-2023/admin'} element={<BibleWalk2023 isAdmin />} />
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
