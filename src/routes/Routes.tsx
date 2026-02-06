import { Route, Routes as ReactRoutes } from 'react-router-dom';
import OnlineCheckLayout from 'layout/OnlineCheckLayout';
import NehemRoadLayout from 'layout/NehemRoadLayout';
import EarthArcadeMapLayout from 'layout/EarthArcadeMapLayout';
import EarthArcadeMapStatusLayout from 'layout/EarthArcadeMapStatusLayout';
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

export const Routes = () => {
  // 접속 기기 체크
  const mobileCheck = (): boolean => /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <ReactRoutes>
      {/* 특새 (17차) */}
      <Route
        path={'/dawn-worship-17th'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-17th'>
            <DawnWorship17th />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/dawn-worship-17th/admin'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-17th' isAdmin>
            <DawnWorship17th />
          </OnlineCheckLayout>
        }
      />

      {/* 특새 (20차) */}
      <Route
        path={'/dawn-worship-20th'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-20th'>
            <DawnWorship20th />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/dawn-worship-20th/admin'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-20th' isAdmin>
            <DawnWorship20th />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/dawn-worship-20th/admin/setting'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-20th' isAdmin>
            <DawnWorship20thAdminSetting />
          </OnlineCheckLayout>
        }
      />

      {/* 특새 (21차) */}
      <Route
        path={'/dawn-worship-21th'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-21th'>
            <DawnWorship21th />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/dawn-worship-21th/admin'}
        element={
          <OnlineCheckLayout serviceName='dawn-worship-21th' isAdmin>
            <DawnWorship21th />
          </OnlineCheckLayout>
        }
      />

      {/* 가을성경산책 (2022년) */}
      <Route
        path={'/bible-walk-2022'}
        element={
          <OnlineCheckLayout serviceName='bible-walk-2022'>
            <BibleWalk2022 />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/bible-walk-2022/admin'}
        element={
          <OnlineCheckLayout serviceName='bible-walk-2022' isAdmin>
            <BibleWalk2022 />
          </OnlineCheckLayout>
        }
      />

      {/* 가을성경산책 (2023년) */}
      <Route
        path={'/bible-walk-2023'}
        element={
          <OnlineCheckLayout serviceName='bible-walk-2023'>
            <BibleWalk2023 />
          </OnlineCheckLayout>
        }
      />
      <Route
        path={'/bible-walk-2023/admin'}
        element={
          <OnlineCheckLayout serviceName='bible-walk-2023' isAdmin>
            <BibleWalk2023 />
          </OnlineCheckLayout>
        }
      />

      {/* 지구오락실 (2023년 청년부 여름수련회) */}
      <Route
        path={'/earth-arcade/map'}
        element={
          <EarthArcadeMapLayout>
            <EarthArcadeMap />
          </EarthArcadeMapLayout>
        }
      />
      <Route
        path={'/earth-arcade/map-status'}
        element={
          <EarthArcadeMapStatusLayout>
            <EarthArcadeMapStatus />
          </EarthArcadeMapStatusLayout>
        }
      />

      {/* 네헴로드 (2025년 청년부 여름수련회) */}
      <Route
        path={'/nehem-road/home'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadHome />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/reserve-theme'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadReserveTheme />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/reserve-plan'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadReservePlan />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/reserve-location'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadReserveMap />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/reserve-check'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadReserveCheck />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/contact'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadContact />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/admin'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadAdmin />
          </NehemRoadLayout>
        }
      />
      <Route
        path={'/nehem-road/admin/reserve'}
        element={
          <NehemRoadLayout isMobile={mobileCheck()}>
            <NehemRoadReserveByGame />
          </NehemRoadLayout>
        }
      />

      {/* <Route path='*' element={<NotFound />} /> */}
    </ReactRoutes>
  );
};
