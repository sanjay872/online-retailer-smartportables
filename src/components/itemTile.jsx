
import ItemType from '../types/itemType';
import '../styles/itemTile.css';
import { useNavigate } from 'react-router-dom';

function ItemTile({item,setViewState, setViewProduct}){
    const  image = require("../images/"+item.imageId);
    const navigate=useNavigate()


    function showView(){
        console.log("Hi")
        setViewState((prev)=>!prev);
        setViewProduct(item);
        navigate("view")
    }

    return(
        <div className='item' onClick={showView}>
            <div className='item_header'>
                <div className='item_header-name'>{item.title}</div>
                <div className='item_header-id'>#{item.id}</div>
            </div>
            <div className='item_content'>
                <img className='item_content-image' src={image} alt={item.title}></img>
                <div className='item_content-description'>{item.description}</div>
            </div>
            <div className='item_footer'>
                <div className='item_footer-stock'>{item.stock} left out</div>
                <div className='item_footer-price'>${item.price}</div>
            </div>
            {/* <div className='item-sale-price'>{item.salePrice}</div> */}
        </div>
    );
}

ItemTile.propTypes={
    item:ItemType
}

export default ItemTile;