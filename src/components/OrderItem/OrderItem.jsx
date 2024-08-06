import styles from './OrderItem.module.css';
import { ImCross } from 'react-icons/im';

const OrderItem = ({ image, item, newPrice, title, totalPrice, id, quantity, onDecrBtnClick, onIncrBtnClick, onRemoveFromCart, handleClearCart, handleOrder }) => {
    return (
        <li className={styles.order_item}>
            <img className={styles.order_item_img} src={image} alt={title} />
                     <div className={styles.orderText_wrapper}>
                        <div className={styles.wrapper}>
                            <div className={styles.order_title_wrapper}>
                    <h4 className={styles.title}>{title}</h4>
                       {newPrice ? <p className={styles.price}>{`${totalPrice} $`}</p> : <p className={styles.price}>{`${totalPrice} $`}</p> }
                </div>
                    </div>
                        <div className={styles.btn_wrapper}>
                            <div className={styles.quantity_btn_wrapper}>
                                <button onClick={() => {onDecrBtnClick(id) } } className={styles.btnDecr}>-</button>
                                <p className={styles.quantity}>{quantity}</p>
                                <button onClick={() => { onIncrBtnClick(id) }} className={styles.btnIncr}>+</button>
                                </div>
                            <button className={styles.remove_btn} onClick={() => onRemoveFromCart(item)}><  ImCross className={styles.cross}/></button>
                        </div>
                        </div>

        
            {/* {cartItems.length && <p className={styles.total_order_price}>Total price: {
                cartItems.reduce((acc, item) => {
                    acc += item.totalPrice
                return acc
            }, 0) + "$"
            }</p>} */}
            {/* <div className={styles.cart_btn_wrapper}>
                            {cartItems.length && <Link to="/order" onClick={handleOrder} className={styles.order_btn}>Order</Link>}
            {cartItems.length && <button onClick={handleClearCart} className={styles.remove_all}>Clear cart</button>}
                </div> */}
        </li>
    )
}

export default OrderItem;