import Item from './itemType';
import PropTypes from 'prop-types'

const productType=PropTypes.shape({
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    items:PropTypes.arrayOf(Item)
});

export default productType;