import React from "react";
import { motion } from "framer-motion";
import styles from "./Cart.module.css";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Cart = ({
    isCartVisible,
    cartVisibility,
    onDecrBtnClick,
    onIncrBtnClick,
    cartItems, onRemoveFromCart, handleClearCart, handleOrder }) => {
    return (
        <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className={styles.cart}
        >
    {/* <button className={styles.close_cart_btn}></button> */}
            {cartItems.length ? <h2 className={styles.cart_title}> Items in cart</h2> : <p className={styles.text}>No goods in cart</p>}
            
            {cartItems.length && cartItems.map((item, index) => (
                <div key={index} className={styles.cart_item}>
                    <div className={styles.cartText_wrapper}>
                        <div className={styles.wrapper}>
                            <div className={styles.cart_title_wrapper}>
                    <h4 className={styles.title}>{item.title}</h4>
                       {item.newPrice ? <p className={styles.price}>{`${item.totalPrice} $`}</p> : <p className={styles.price}>{`${item.totalPrice} $`}</p> }
                </div>
                    </div>
                        <div className={styles.btn_wrapper}>
                            <div className={styles.quantity_btn_wrapper}>
                                <button onClick={() => {onDecrBtnClick(item.id) } } className={styles.btnDecr}>-</button>
                                <p className={styles.quantity}>{item.quantity}</p>
                                <button onClick={() => { onIncrBtnClick(item.id) }} className={styles.btnIncr}>+</button>
                                </div>
                            <button className={styles.remove_btn} onClick={() => onRemoveFromCart(item)}><  ImCross className={styles.cross}/></button>
                        </div>
                        </div>
                </div>
            ))}
            {cartItems.length && <p className={styles.total_cart_price}>Total price: {
                cartItems.reduce((acc, item) => {
                    acc += item.totalPrice
                return acc
            }, 0) + "$"
            }</p>}
            <div  className={styles.cart_btn_wrapper}>
                            {cartItems.length && <Link to="/order" onClick={cartVisibility} className={styles.order_btn}>Order</Link>}
                {cartItems.length && <button onClick={() => {
                    handleClearCart()
                    cartVisibility()
                }} className={styles.remove_all}>Clear cart</button>}
                </div>
        </motion.div>
    )
}

export default Cart;