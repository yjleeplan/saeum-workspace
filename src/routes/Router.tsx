import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './AdminRoute';
import MainRoute from './MainRoute';
import NehemRoadRoute from './NehemRoadRoute';
import Admin from 'pages/admin/Admin';
import Main from 'pages/main/Main';
import NehemRoad from 'pages/retreat/nehem-road/NehemRoad';

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 접속 기기 체크
  const mobileCheck = (): boolean => /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <Routes>
      <Route element={<MainRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/'} element={<Main setIsLoading={setIsLoading} />} />
        <Route path={'/main'} element={<Main setIsLoading={setIsLoading} />} />
      </Route>

      <Route element={<AdminRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/admin'} element={<Admin setIsLoading={setIsLoading} />} />
      </Route>

      <Route element={<NehemRoadRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/nehem-road'} element={<NehemRoad isMobile={mobileCheck()} />} />
      </Route>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
