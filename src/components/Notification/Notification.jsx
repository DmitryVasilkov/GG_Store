import styles from './Notification.module.css';

const Notification = ({text,width}) => {
    return (
        <div className={styles.notification} style={{width:`${width}px`}}>
                <p className={styles.notification_text}>{text}</p>
            </div>
)
}

export default Notification;