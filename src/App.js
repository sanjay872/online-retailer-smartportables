import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './view/homePage';
import ProductPage from './view/productPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductViewPage from './view/productViewPage';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/products?" element={<ProductPage />}>
              <Route path='/view' element={<ProductViewPage />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
