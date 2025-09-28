import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './view/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductViewPage from './view/productViewPage';
import ProductList from './view/productList';
import ProductLayout from './view/productLayout';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products?' element={<ProductViewPage/>}></Route>
            <Route path="/products/details" element={<ProductLayout />}>
              
            </Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
