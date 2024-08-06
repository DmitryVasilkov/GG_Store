import OrderList from "../../OrderList/OrderList";
import styles from "./Order.module.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../Modal/Modal";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Order = ({ currenUser,  onOrderBtnClick ,handleClearCart, cartItems, onIncrBtnClick, onDecrBtnClick, onRemoveFromCart,
    handleOrderModalClose,
    usersHistory,
    onAddToUserHistory,
    onBackdropCloseWarnModal,
    onEscCloseWarningModal,
    onCloseWarningModal,
   isOrderModalOpen,
    setIsOrderModalOpen}) => {
        const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
        }
    
    const location = useLocation();


    return (
        <section className={styles.order_section}>
              <button onClick={goBack} className={styles.link}>Go back</button>
            <h1 className={styles.title}>Orders</h1>
        
            {/* <div className={styles.history_wrapper}>
            {usersHistory.filter(item => {
    console.log(usersHistory)
                console.log(currenUser)
                console.log(item.user===currenUser)
            return    item.user === currenUser
            }).map(item => {
                console.log(item)
                return <HistoryList item={item} />
            })} 
                </div> */}
            {!cartItems.length && <div><p className={styles.empty_orders}>You don't have any active orders now.</p>
            <p className={styles.empty_orders}> Please, add at least one item to the cart to be able to make order.</p></div> }
            <OrderList  
                onOrderBtnClick ={onOrderBtnClick }
                handleOrderModalClose ={handleOrderModalClose }
                setIsOrderModalOpen={setIsOrderModalOpen}
                handleClearCart={handleClearCart}
                onRemoveFromCart={onRemoveFromCart}
                onIncrBtnClick={onIncrBtnClick}
                onDecrBtnClick={onDecrBtnClick}
                cartItems={cartItems} />
            {isOrderModalOpen && <Modal
                onBackdropCloseWarnModal={onBackdropCloseWarnModal}
                onEscCloseWarningModal={onEscCloseWarningModal}>
                <p className={styles.textMessHome}>{`Your order №111 has been sucssesfully accepted! Our manager will connect you to clarify details!`}</p>
                <button onClick={() => {
                    onAddToUserHistory(
                        { user: currenUser, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), cartItems }
                    ) 
                    handleOrderModalClose()
                    onOrderBtnClick ()
                }} className={styles.modal_close_btn}>Got it</button></Modal>}

                <Link to={location.pathname === "/order/history" ? "/order" : "history"} className={styles.history_title}>{location.pathname === "/order/history" ? "Hide order's history" : "Show order's history"}<span className={styles.icon}>{location.pathname === "/order/history" ? <IoIosArrowUp/>  : <IoIosArrowDown />} </span></Link>
           {/* <button className={styles.toggle_history_btn}><IoIosArrowDown />  </button>    */}

            <Outlet/>
        </section>
    )
}

export default Order;

