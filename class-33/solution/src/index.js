import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from './Context/Settings/Settings';
import AuthProvider from './Context/Auth/Auth';


import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
