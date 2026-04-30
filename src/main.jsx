import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import App from './App.jsx';
import LogIn from './components/LogIn.jsx';
import Payment from './components/Payment.jsx';
import PurchaseHistory from './components/PurchaseHistory.jsx';
import Registration from './components/Registration.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import Shop from './components/Shop.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Shop />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/payment"
              element={(
                <RequireAuth>
                  <Payment />
                </RequireAuth>
              )}
            />
            <Route
              path="/history"
              element={(
                <RequireAuth>
                  <PurchaseHistory />
                </RequireAuth>
              )}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
