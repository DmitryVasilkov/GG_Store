// src/App.js
import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AuthRequired from './components/hoc/AuthRequired';
import OrderHistoryPage from './components/page/OrderHistoryPage/OrderHistoryPage';
import Cabinet from './components/page/Cabinet/Cabinet';
import Offers from './components/page/Offers/Offers';
import useUser from './hooks/useUser';
import useCart from './hooks/useCart';
import useGames from './hooks/useGames';

const Home = lazy(() => import('./components/page/Home/Home'));
const Games = lazy(() => import('./components/page/Games/Games'));
const Sales = lazy(() => import('./components/page/Sales/Sales'));
const Contacts = lazy(() => import('./components/page/Contacts/Contacts'));
const GameInfoPage = lazy(() => import('./components/page/GameInfoPage/GameInfoPage'));
const Favorite = lazy(() => import('./components/page/Favorite/Favorite'));
const Register = lazy(() => import('./components/page/Register/Register'));
const Login = lazy(() => import('./components/page/Login/Login'));
const Order = lazy(() => import('./components/page/Order/Order'));

function App() {
  const {
    currentUser, isLoged, isNotificationShown, isNotificationFavShown, isWarningModalOpen, favoriteItems, usersHistory,
    handleLogin, handleLogout, handleAddUser, handleUpdateUser, handleShowNotification, handleShowFavNotification, handleToggleWarningModal
  } = useUser();
  const {
    cartItems, isCartVisible, isOrderModalOpen,
    handleAddToCart, handleRemoveFromCart, handleClearCart, handleToggleCartVisibility, handleToggleOrderModal
  } = useCart();
  const { games, sales, handleFilterGames } = useGames();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout
              isLoged={isLoged}
              isNotificationFavShown={isNotificationFavShown}
              isNotificationShown={isNotificationShown}
              currentUser={currentUser}
              handleLogOutCurrentUser={handleLogout}
              handleCloseWarningModal={handleToggleWarningModal}
              handleCloseHomeModal={handleToggleWarningModal}
              handleCloseCart={handleToggleCartVisibility}
              isCartVisible={isCartVisible}
              cartVisibility={handleToggleCartVisibility}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }>
            <Route index element={<Home
              currentUser={currentUser}
              cartVisibility={handleToggleCartVisibility}
              handleCloseWarningModal={handleToggleWarningModal}
              handleCloseHomeModal={handleToggleWarningModal}
              handleFilterGames={handleFilterGames}
            />} />
            <Route path="games" element={<Games
              currentUser={currentUser}
              handleFilterGames={handleFilterGames}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToCart}
              onRemoveFromFavorite={handleRemoveFromCart}
            />} />
            <Route path="sales" element={<Sales
              currentUser={currentUser}
              handleFilterGames={handleFilterGames}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToCart}
              onRemoveFromFavorite={handleRemoveFromCart}
            />} />
            <Route path="favorite" element={<AuthRequired>
              <Favorite
                currentUser={currentUser}
                favoriteItems={favoriteItems}
                onRemoveFromFavorite={handleRemoveFromCart}
                onAddToCart={handleAddToCart}
              />
            </AuthRequired>} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="order" element={<AuthRequired>
              <Order
                currentUser={currentUser}
                usersHistory={usersHistory}
                onAddUserHistory={handleAddToCart}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                handleOrderModalClose={handleToggleOrderModal}
              />
            </AuthRequired>}>
              <Route path="history" element={<OrderHistoryPage
                currentUser={currentUser}
                usersHistory={usersHistory}
                onAddToCart={handleAddToCart}
              />} />
            </Route>
            <Route path="cabinet" element={<AuthRequired>
              <Cabinet
                currentUser={currentUser}
                changeUserData={handleUpdateUser}
              />
            </AuthRequired>}>
              <Route path="history" element={<OrderHistoryPage
                currentUser={currentUser}
                usersHistory={usersHistory}
                onAddToCart={handleAddToCart}
              />} />
            </Route>
            <Route path="register" element={<Register
              handleSetUserImageValue={handleAddUser}
              handleCurrentUser={handleLogin}
              handleRegFormSubmit={handleAddUser}
            />} />
            <Route path="login" element={<Login
              handleCurrentUser={handleLogin}
              onBackdropCloseWarnModal={handleToggleWarningModal}
              onEscCloseWarningModal={handleToggleWarningModal}
              onCloseWarningModal={handleToggleWarningModal}
            />} />
            <Route path="offers" element={<AuthRequired>
              <Offers />
            </AuthRequired>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
