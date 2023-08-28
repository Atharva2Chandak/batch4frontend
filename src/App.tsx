import React from 'react';
import { NavBar } from './components/NavBar';
import { AppRoutes } from './routes';
import { UserDetailsProvider } from './contexts/UserDetailsProvider';
import { ErrorDetailsProvider } from './contexts/ErrorDetailsProvider';
import ErrorSnackbar from './components/ErrorSnackbar';
import { Snackbar } from '@mui/base';


function App() {
  return (
    <>
      <UserDetailsProvider>
        <ErrorDetailsProvider>
          <NavBar />
          <AppRoutes/>
          <ErrorSnackbar/>
        </ErrorDetailsProvider>
      </UserDetailsProvider>
    </>
  );
}

export default App;