import './styles/header.css';
import './styles/shop.css';
import './styles/footer.css';

import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';

function App() {
   return (
      <>
         <Header />
         <Shop />
         <Footer />
      </>
   );
}

export default App;
