import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './view/homePage';
import ProductPage from './view/productPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
