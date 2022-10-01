import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Contexts/authContext/authContext';
import AppContextProvider from './Contexts/AppContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
