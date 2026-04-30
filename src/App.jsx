import './styles/base.css';
import './styles/header.css';
import './styles/shop.css';
import './styles/footer.css';

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}

export default App;
