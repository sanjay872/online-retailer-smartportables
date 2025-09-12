
import ItemType from '../types/itemType';
import '../styles/itemTile.css';

function ItemTile({item}){
    const  image = require("../images/"+item.imageId);
    return(
        <div className='item'>
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