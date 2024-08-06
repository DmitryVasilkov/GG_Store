import styles from './SideBar.module.css';
import { NavLink, Link,useNavigate } from 'react-router-dom';
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";
import useAuth from '../hook/useAuth';

const SideBar = ({ isSideBarOpen, handleHideSideBar, currentUser, handleLogOutCurrentUser, handleCloseCart }) => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <aside className={isSideBarOpen ? styles.sideBar : styles.sideBar + " " + styles.open}>
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    {currentUser && <h2 className={styles.title}>Hi, {currentUser}!</h2>}
                    </div>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink onClick={handleHideSideBar } className={({isActive}) => isActive ? styles.link + " " + styles.active : styles.link } to="/favorite">Favorite</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink onClick={handleHideSideBar } className={({isActive}) => isActive ? styles.link + " " + styles.active : styles.link }  to="/order">Orders</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink onClick={handleHideSideBar } className={({isActive}) => isActive ? styles.link + " " + styles.active : styles.link }  to="/cabinet">Cabinet</NavLink>  
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink onClick={handleHideSideBar } className={({isActive}) => isActive ? styles.link + " " + styles.active : styles.link }  to="/offers">Offers</NavLink>  
                    </li>
                </ul>
                </nav>
                {user ? <Link onClick={
                
                    () => {
                                   
                                        logout(() => {
                                        navigate('/', { replace: true })
                                        handleLogOutCurrentUser()
                                        })
                               handleHideSideBar();
                                        // handleCloseCart()
                                        // handleCloseHomeModal()
                                        // handleCloseWarningModal()
                                        // handleOrderModalClose()
                                      
                                    }
                              
                                } to="/" className={styles.logout_btn}>Log out</Link> :  
                    <Link onClick={() => {
                        handleHideSideBar();
                            handleCloseCart();
                    }} to="/login" className={styles.logout_btn}>Log in</Link>
                }
                

                {/* <Link to='/login' className={styles.logout_btn}>{user ? "Log out" : "Log in"}</Link> */}
                </div>
            <button onClick={handleHideSideBar} className={styles.btn_close}>{ !isSideBarOpen  ? <FaArrowRight className={styles.arrow_close}/> : <FaArrowLeft className={styles.arrow_close} /> }</button>
        </aside>
    )
}

export default SideBar;