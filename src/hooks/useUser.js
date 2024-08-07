// src/hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, addUser, updateUser, showNotification, showFavNotification, toggleWarningModal } from '../store/slice/userSlice';

const useUser = () => {
  const dispatch = useDispatch();
  const { currentUser, isLoged, isNotificationShown, isNotificationFavShown, isWarningModalOpen, favoriteItems, usersHistory } = useSelector((state) => state.user);

  const handleLogin = (user) => dispatch(login(user));
  const handleLogout = () => dispatch(logout());
  const handleAddUser = (user) => dispatch(addUser(user));
  const handleUpdateUser = (data) => dispatch(updateUser(data));
  const handleShowNotification = () => dispatch(showNotification());
  const handleShowFavNotification = () => dispatch(showFavNotification());
  const handleToggleWarningModal = () => dispatch(toggleWarningModal());

  return {
    currentUser, isLoged, isNotificationShown, isNotificationFavShown, isWarningModalOpen, favoriteItems, usersHistory,
    handleLogin, handleLogout, handleAddUser, handleUpdateUser, handleShowNotification, handleShowFavNotification, handleToggleWarningModal
  };
};

export default useUser;
