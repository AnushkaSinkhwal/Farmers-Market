import { addToCart, removeFromCart, updateCartItem, clearCart } from './cartActions';

// In the Cart component
const handleaddToCart = (product) => {
  dispatch(addToCart(product));
};

const handleremoveFromCart = (productId) => {
  dispatch(removeFromCart(productId));
};

const handleupdateCartItem = (productId, quantity) => {
  dispatch(updateCartItem(productId, quantity));
};

const handleclearCart = () => {
  dispatch(clearCart());
};