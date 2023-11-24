// App.js

import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UserHistoryPage from './pages/user/UserHistoryPage.jsx';
import UserInfoPage from './pages/user/UserInfoPage.jsx';
import UserTrackingPage from './pages/user/UserTrackingPage.jsx';

import AdminLocationChangePage from './pages/admin/AdminLocationChangePage.jsx';
import AdminStatusChangePage from './pages/admin/AdminStatusChangePage.jsx';
import AdminPackageHistoryPage from './pages/admin/AdminPackageHistoryPage.jsx';
import RegisterPackage from './pages/admin/RegisterPackage.jsx';
import Home from './pages/home.jsx';
import Home from './pages/login.jsx';

function App() {
  return (
  <>
  
  <BrowserRouter>
      <Routes>
        {/* Rutas para Usuario */}
        <Route path="/user/info" element={<UserInfoPage/>} exact/>
        <Route path="/user/history" element={<UserHistoryPage/>} exact />
        <Route path="/user/tracking" element={<UserTrackingPage/>} />

        {/* Rutas para Administrador */}
        <Route path="/admin/location-change" element={<AdminLocationChangePage/>} exact />
        <Route path="/admin/status-change" element={<AdminStatusChangePage/>} exact />
        <Route path="/admin/package-history" element={<AdminPackageHistoryPage/>} exact />
        <Route path="/admin/register-package" element={<RegisterPackage/>} exact />

        {/* Ruta para la página de inicio */}
        <Route path="/home" element={<Home/>} exact/>
        <Route path="/login" element={<Login/>} exact/>


      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
