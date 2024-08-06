import OrderItem from "../OrderItem/OrderItem";
import styles from "./OrderList.module.css";

const OrderList = ({ 
    setIsOrderModalOpen,
    cartItems,
    onIncrBtnClick,
    onDecrBtnClick, onRemoveFromCart, handleClearCart }) => {
    return (<>
        <ul className={styles.oreder_list}>
            {cartItems.map(item => {
                return <OrderItem
                    key={item.id}
                    image={item.image}
                     cartItems={cartItems}
                    item={item}
                    newPrice={item?.newPrice}
                    title={item.title}
                    totalPrice={item.totalPrice}
                    quantity={item.quantity}
                    id={item.id}
                    onIncrBtnClick={onIncrBtnClick}
                    onDecrBtnClick={onDecrBtnClick}
                    onRemoveFromCart={onRemoveFromCart}
             
                />
            })}
        </ul>
            {cartItems.length && <p className={styles.total_order_price}>Total price: {
                cartItems.reduce((acc, item) => {
                    acc += item.totalPrice
                return acc
            }, 0) + "$"
        }</p>}
        {cartItems.length &&  <div className={styles.buttons_wrapper}>
            <button onClick={()=> {setIsOrderModalOpen(true)}} className={styles.confirm_btn}>Confirm order</button>
            <button onClick={handleClearCart} className={styles.cencel_btn}>Cencel order</button>
        </div>}
        </>
    )
}

export default OrderList;