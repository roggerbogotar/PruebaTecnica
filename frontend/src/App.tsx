import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/login/Login.page"));
const AdministrationPage = lazy(() => import("./pages/administration/Administration.page"));
const SalesPage = lazy(() => import("./pages/sales/Sales.page"));

const App = (): JSX.Element => {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/administracion" element={<AdministrationPage />} />
            <Route path="/ventas" element={<SalesPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
