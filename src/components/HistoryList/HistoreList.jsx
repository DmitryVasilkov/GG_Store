import HistoryItem from '../HistoryItem/HistoryItem';
import styles from './HistoryList.module.css';

const HistoryList = ({showNotification ,onAddtoCart, item, onAddToCart }) => {
    const histories = item.cartItems;
    const date = item.date;
    const time = item.time;

    const handleRepeatClick = (arr) => {
        arr.forEach(item => {
    onAddToCart(item)
        })
            showNotification()
    }

    return (
        <div className={styles.list_wrapper}>
           <p className={styles.orderDate}><span className={styles.date}>{date}</span><span className={styles.time}>{time}</span></p>
        <ul id={item.date+item.time} className={styles.history_list}>
            {histories.map(history => {
               return <HistoryItem showNotification ={showNotification } history={history} onAddtoCart={onAddtoCart} key={history.image} image={history.image}
                    newPrice={history?.newPrice} totalPrice={history.totalPrice}
                    quantity={history.quantity} date={date} time={time} title={history.title}/>
           })}
               
            </ul>
            <div className={styles.bottom_wrapper}>
            <p className={styles.totalPrice}>Total order price: {histories.reduce((acc, item) => {
                acc+=item.totalPrice
                return acc
            }, 0)}$</p>
                <button
                    onClick={() => {
                    handleRepeatClick(histories)
                }}  className={styles.repeat_btn}>Repeat the order</button>
                </div>
            </div>
    )
}

export default HistoryList;