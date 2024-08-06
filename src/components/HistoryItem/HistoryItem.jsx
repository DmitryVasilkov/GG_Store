import styles from './HistoryItem.module.css';

const HistoryItem = ({showNotification , history, onAddtoCart, image, title, newPrice, totalPrice, quantity, date, time }) => {
    return (
        <li className={styles.history_item}>
                       {/* <p className={styles.orderDate}><span className={styles.date}>{date}</span><span className={styles.time}>{time}</span></p> */}
            <div onClick={() => {
                onAddtoCart(history)
              showNotification()
            }} className={styles.img_wrapper}><img  className={styles.history_item_img} src={image} alt={title} /></div> 
                     <div className={styles.historyText_wrapper}>
                        <div className={styles.wrapper}>
                            <div className={styles.order_title_wrapper}>
                    <h4 className={styles.title}>{title}</h4>
                       {newPrice ? <p className={styles.price}>{`${totalPrice} $`}</p> : <p className={styles.price}>{`${totalPrice} $`}</p> }
                </div>
    

         
                </div>
                <p className={styles.quantity}>Quantity: {quantity}</p>
                </div>
            
        </li>
    )
}

export default HistoryItem;