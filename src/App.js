import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Context/auth'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
