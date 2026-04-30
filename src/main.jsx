import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App.jsx';
import LogIn from './components/LogIn.jsx';
import Registration from './components/Registration.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
