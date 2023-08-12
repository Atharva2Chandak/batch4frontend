import React from 'react';
import { NavBar } from './components/NavBar';
import { AppRoutes } from './routes';


function App() {
  return (
    <>
      <NavBar />
      <AppRoutes/>
    </>
  );
}

export default App;