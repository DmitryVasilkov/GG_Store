import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Cart from "../Cart/Cart";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";

const Header = ({
    isLoged,
    isNotificationFavShown,
       isNotificationShown,
    handleCloseSideBar,
    handleLogOutCurrentUser,
    handleOrderModalClose,
    handleCloseWarningModal,
    handleCloseHomeModal,
    handleCloseCart,
    isCartVisible,
    cartVisibility,
    onDecrBtnClick,
    onIncrBtnClick,
    cartItems,
    onRemoveFromCart,
    handleClearCart }) => {
    
    const { user, logout } = useAuth();
    const navigate = useNavigate();

  
    return (    
        <header className={styles.header}>
            {isNotificationShown && <Notification text="Successfuly added to cart" />} 
            {(isNotificationFavShown ) && <Notification width={300} text="Successfuly added to favorite"/>} 
            {/* <div className={styles.notification}>
                <p className={styles.notification_text}>Successfuly added to cart</p>
            </div> */}
             <div className={styles.container}>
       
            <h1 className={styles.header_title}>GG Store</h1>
            <div className={styles.wrapper}>
            <nav>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink   onClick={() => {
                                        handleCloseCart()
                                    handleCloseWarningModal()
                                      handleCloseSideBar()
                                     
                                        handleOrderModalClose()
                                    }} to="/" className={({isActive})=> isActive ? styles.link + " " + styles.active : styles.link}>Home </NavLink>
                    </li>
                         <li className={styles.nav_item}>
                                <NavLink
                                    onClick={() => {
                                        handleCloseCart()
                                        handleCloseHomeModal()
                                        handleCloseWarningModal()
                                         handleCloseSideBar()
                                       
                                        handleOrderModalClose()
                                    }}
                                    to="/games" className={({ isActive }) => isActive ? styles.link + " " + styles.active : styles.link}>Games</NavLink>
                    </li>
                         <li className={styles.nav_item}>
                                <NavLink
                                       onClick={() => {
                                        handleCloseCart()
                                        handleCloseHomeModal()
                                        handleCloseWarningModal()
                                         handleCloseSideBar()
                                        handleOrderModalClose()
                                     
                                    }}
                                    to="/sales" className={({ isActive }) => isActive ? styles.link + " " + styles.active : styles.link}>Sales</NavLink>
                        </li>
                              <li className={styles.nav_item}>
                                <NavLink
                                      onClick={() => {
                                        handleCloseCart()
                                        handleCloseHomeModal()
                                        handleCloseWarningModal()
                                        handleOrderModalClose()
                                          handleCloseSideBar()
                                    }}
                                    to="/favorite" className={({ isActive }) => isActive ? styles.link + " " + styles.active : styles.link}>Favorite</NavLink>
                    </li>
                          <li className={styles.nav_item}>
                                <NavLink
                                     onClick={() => {
                                        handleCloseCart()
                                        handleCloseHomeModal()
                                        handleCloseWarningModal()
                                        handleOrderModalClose()
                                          handleCloseSideBar()
                                    }}
                                    to="/contacts" className={({ isActive }) => isActive ? styles.link + " " + styles.active : styles.link}>Contacts</NavLink>
                    </li>
                            {/* <li>
                                <Link to="/register" className={styles.link_auth_reg}>Registration</Link>
                            </li>    */}
                            {user ?  <li className={styles.last_item}>
                                <Link onClick={
                                    () => {
                                        logout(() => {
                                        navigate('/', { replace: true })
                                        handleLogOutCurrentUser()
                                        })
                                        handleCloseCart()
                                        handleCloseHomeModal()
                                        handleCloseWarningModal()
                                        handleOrderModalClose()
                                          handleCloseSideBar()
                                      
                                    }
                              
                                } to="/" className={styles.link_auth_log}>Log out</Link>
                                <p className={styles.user_name}>Hi, {user}</p>
                            </li> :  <li className={styles.last_item}>
                                <Link onClick={handleCloseCart} to="/login" className={styles.link_auth_log}>Log in</Link>
                            </li>  }
                </ul>
            </nav>
            <button className='cartButton' onClick={cartVisibility}>Cart</button>
                    {isCartVisible && <Cart
                        isCartVisible={isCartVisible}
                        cartVisibility={cartVisibility}
                        onDecrBtnClick={onDecrBtnClick}
                        onIncrBtnClick={onIncrBtnClick}
                        handleClearCart={handleClearCart}
                        cartItems={cartItems}
                        onRemoveFromCart={onRemoveFromCart} />} 
                </div>
            </div>

        </header>
    
    )
}

export default Header;