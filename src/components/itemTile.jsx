
import ItemType from '../types/itemType';

function ItemTile({item}){
    const  image = require("../images/"+item.imageId);
    return(
        <div className='item'>
            <div className='item-id'>{item.id}</div>
            <img className='item-image' src={image} alt={item.name}></img>
            <div className='item-price'>{item.name}</div>
            <div className='item-stock'>{item.stock}</div>
            <div className='item-description'>{item.description}</div>
            <div className='item-sale-price'>{item.salePrice}</div>
        </div>
    );
}

ItemTile.propTypes={
    item:ItemType
}

export default ItemTile;