import { Outlet } from "react-router-dom";
import ProductList from "./productList";
import { useState } from "react";

import '../styles/productlayout.css';

export default function ProductLayout(){
    
    const [viewProduct,setViewProduct]=useState(null);

    return(
        <div className="layout">
            <ProductList setViewProduct={setViewProduct} />
            <Outlet context={viewProduct}/>
        </div>
    );
}