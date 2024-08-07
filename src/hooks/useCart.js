import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart, toggleCartVisibility, toggleOrderModal } from '../store/slice/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems, isCartVisible, isOrderModalOpen } = useSelector((state) => state.cart);

  const handleAddToCart = (item) => dispatch(addToCart(item));
  const handleRemoveFromCart = (item) => dispatch(removeFromCart(item));
  const handleClearCart = () => dispatch(clearCart());
  const handleToggleCartVisibility = () => dispatch(toggleCartVisibility());
  const handleToggleOrderModal = () => dispatch(toggleOrderModal());

  return {
    cartItems, isCartVisible, isOrderModalOpen,
    handleAddToCart, handleRemoveFromCart, handleClearCart, handleToggleCartVisibility, handleToggleOrderModal
  };
};

export default useCart;
