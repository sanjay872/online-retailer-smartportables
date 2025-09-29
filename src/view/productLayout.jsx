import { Outlet } from "react-router-dom";
import ProductList from "./productList";
import { useState } from "react";

export default function ProductLayout(){
    
    const [viewProduct,setViewProduct]=useState(null);

    return(
        <div>
            <ProductList setViewProduct={setViewProduct} />
            <Outlet context={viewProduct}/>
        </div>
    );
}