import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Suspense, useState } from "react";
import SideBar from "../SideBar/SideBar";


const Layout = ({
    isLoged,
    isNotificationFavShown,
   isNotificationShown,
    currentUser,
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
        const[isSideBarOpen, setIsSideBarOpen] = useState(false)
    const handleHideSideBar = () => {
      setIsSideBarOpen(prevState => !prevState)
    }
      const handleCloseSideBar = () => {
      setIsSideBarOpen(false)
    }
    return (
        <div className={styles.main_layout}>     
            <Header isLoged={isLoged}  isNotificationFavShown={isNotificationFavShown}   isNotificationShown={   isNotificationShown} handleCloseSideBar={handleCloseSideBar}  handleHideSideBar={handleHideSideBar}  handleLogOutCurrentUser={handleLogOutCurrentUser} handleOrderModalClose={handleOrderModalClose} handleCloseWarningModal={handleCloseWarningModal} handleCloseHomeModal={handleCloseHomeModal} handleCloseCart={handleCloseCart} isCartVisible={isCartVisible} cartVisibility={cartVisibility} onDecrBtnClick={onDecrBtnClick} onIncrBtnClick={onIncrBtnClick} handleClearCart={handleClearCart} cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
            <SideBar   handleCloseSideBar={handleCloseSideBar}  isSideBarOpen={isSideBarOpen} handleHideSideBar={handleHideSideBar}   handleLogOutCurrentUser={   handleLogOutCurrentUser} currentUser={currentUser} />
        <div className={styles.container}>
            <Suspense fallback={<div className={styles.loader}>Loading...</div>}>
                <Outlet />
                </Suspense>
            <Footer/>
            </div>
            </div>
        
           
   
    )
}

export default Layout;