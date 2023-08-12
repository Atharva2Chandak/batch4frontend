import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_PATHS } from "./const";
import { AdminLogin } from "./pages/AdminLogin";
import { Home } from "./pages/home";
import { UserLogin } from "./pages/UserLogin";

export function AppRoutes(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_PATHS.HOME} element={<Home />} />

        <Route path={APP_PATHS.USER.LOGIN} element={<UserLogin />} />
        <Route path={APP_PATHS.USER.DASHBOARD} element={<>user dashboard</>} />
        <Route path={APP_PATHS.USER.LIST_LOANS} element={<>list loans</>} />
        <Route path={APP_PATHS.USER.LIST_ITEMS_PURCHASED} element={<>list items purchased</>} />

        <Route path={APP_PATHS.ADMIN.LOGIN} element={<AdminLogin />} />
        <Route path={APP_PATHS.ADMIN.DASHBOARD} element={<>dashboard</>} />
        <Route path={APP_PATHS.ADMIN.LIST_CUSTOMERS} element={<>list customers</>} />
        <Route path={APP_PATHS.ADMIN.LIST_LOANS} element={<>list loans</>} />
        <Route path={APP_PATHS.ADMIN.LIST_ITEMS}element={<>list items</>} />
        
      </Routes>
    </BrowserRouter>
  );
}
