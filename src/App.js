import './App.css';
import HomePage from './view/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductLayout from './view/productLayout';
import ProductViewPage from './view/productViewPage';
import { RootLayout } from './view/rootLayout';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="products?" element={<ProductLayout/>}>
                <Route path='view/:productId' element={<ProductViewPage/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
