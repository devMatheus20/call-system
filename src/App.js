import React from 'react'
import AuthProvider from './Context/auth'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
