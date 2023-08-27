import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_PATHS, USER_ROLES } from "./const";
import { AdminLogin } from "./pages/AdminLogin";
import { DashboardAdmin } from "./pages/DashboaardAdmin";
import { DashboardUser } from "./pages/DashboardUser";
import { Home } from "./pages/home";
import { ManageCustomersAdmin } from "./pages/manageCustomersAdmin";
import { ManageItemsAdmin } from "./pages/manageItemsAdmin";
import { ListItemsPurchasedUser } from "./pages/ListItemsPurchasedUser";
import { LoanNewItem } from "./pages/LoanNewItem";
import { UserLogin } from "./pages/UserLogin";
import { ManageLoansAdmin } from "./pages/manageLoansAdmin";
import { userDetailsContext } from "./contexts/UserDetailsProvider";
import { ISignInRes } from "./types/siginInRes";

export function AppRoutes(): React.JSX.Element {
  const [globalUser, setGlobalUser] = useContext(userDetailsContext) as [ISignInRes, React.Dispatch<React.SetStateAction<ISignInRes>>];
  useEffect(()=>{
    console.log('hello ', globalUser)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_PATHS.HOME} element={<Home />} />

        <Route path={APP_PATHS.USER.LOGIN} element={<UserLogin />} />
        <Route path={APP_PATHS.USER.DASHBOARD} element={globalUser.roles?.at(0) === USER_ROLES.USER ? <DashboardUser/> : <UserLogin />} />
        <Route path={APP_PATHS.USER.LIST_LOANS} element={globalUser.roles?.at(0) === USER_ROLES.USER ? <LoanNewItem /> : <UserLogin />} />
        <Route path={APP_PATHS.USER.LIST_ITEMS_PURCHASED} element={globalUser.roles?.at(0) === USER_ROLES.USER ? <ListItemsPurchasedUser /> : <UserLogin/> } />

        <Route path={APP_PATHS.ADMIN.LOGIN} element={<AdminLogin />} />
        <Route path={APP_PATHS.ADMIN.DASHBOARD} element={globalUser.roles?.at(0)=== USER_ROLES.ADMIN ? <DashboardAdmin /> : <AdminLogin/> } />
        <Route path={APP_PATHS.ADMIN.LIST_CUSTOMERS} element={ globalUser.roles?.at(0) === USER_ROLES.ADMIN ? <ManageCustomersAdmin/> : <AdminLogin/> } />
        <Route path={APP_PATHS.ADMIN.LIST_LOANS} element={globalUser.roles?.at(0) === USER_ROLES.ADMIN ? <ManageLoansAdmin/> : <AdminLogin /> } />
        <Route path={APP_PATHS.ADMIN.LIST_ITEMS}element={globalUser.roles?.at(0) === USER_ROLES.ADMIN ? <ManageItemsAdmin/> : <AdminLogin/> } />
        
      </Routes>
    </BrowserRouter>
  );
}
