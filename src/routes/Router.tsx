import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from 'pages/admin/Admin';
import Main from 'pages/main/Main';
import AdminRoute from './AdminRoute';
import MainRoute from './MainRoute';

export const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Routes>
      <Route element={<MainRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/'} element={<Main setIsLoading={setIsLoading} />} />
        <Route path={'/main'} element={<Main setIsLoading={setIsLoading} />} />
      </Route>

      <Route element={<AdminRoute isLoading={isLoading} setIsLoading={setIsLoading} />}>
        <Route path={'/admin'} element={<Admin setIsLoading={setIsLoading} />} />
      </Route>

      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
