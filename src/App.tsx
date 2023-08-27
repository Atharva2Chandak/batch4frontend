import React from 'react';
import { NavBar } from './components/NavBar';
import { AppRoutes } from './routes';
import { UserDetailsProvider } from './contexts/UserDetailsProvider';


function App() {
  return (
    <>
      <UserDetailsProvider>
        <NavBar />
        <AppRoutes/>
      </UserDetailsProvider>
    </>
  );
}

export default App;