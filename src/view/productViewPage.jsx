export default function ProductViewPage({product}){

    // const  image = require("../images/"+product.imageId);

    return(
        <div className="product">
            {/* <img className='item_content-image' src={image} alt={product.title}></img> */}
            <div>
                Product
                {/* <div>{product.name}</div>
                <div>{product.id}</div>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div>{product.stock}</div>
                <div>{product.description}</div> */}
            </div>
        </div>
    );
}