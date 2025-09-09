import PropTypes from 'prop-types';

const ItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  description: PropTypes.string,
  salePrice: PropTypes.number,
});

export default ItemType;