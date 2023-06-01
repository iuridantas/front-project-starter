import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalContext from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
);
