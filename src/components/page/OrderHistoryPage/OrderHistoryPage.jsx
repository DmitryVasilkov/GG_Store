import styles from './OrderHistoryPage.module.css';
import HistoryList from '../../HistoryList/HistoreList';
import { nanoid } from 'nanoid';
// import { Link } from 'react-router-dom';

const OrderHistoryPage = ({onAddToCart, showNotification ,onAddtoCart,usersHistory, currentUser}) => {
            console.log('render')
    return (
        <section className={styles.history_section}>
            {/* <button className={styles.hide_history_btn}></button> */}
                <div className={styles.history_wrapper}>
            {usersHistory.filter(item => {
            return    item.user === currentUser
            }).map(item => {
                return <HistoryList onAddToCart={onAddToCart} key={nanoid()} showNotification ={showNotification } onAddtoCart={onAddtoCart} item={item} />
            })} 
                </div>
        </section>
    )
}

export default OrderHistoryPage;