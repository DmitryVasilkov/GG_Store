import styles from './GameInfo.module.css';
import { motion } from "framer-motion";

const GameInfo = ({   showFavNotification, showNotification , currenUser, gameInfo, onAddToCart, onAddToFavorite }) => {

    const button = {
        hover: { scale: 1.1, transition: { duration: 0.4 } },
        tap: {scale: 0.9, transition: {duration: 0.3}}
    }
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={gameInfo.image} alt={gameInfo.title} />
            <div className={styles.descr}>
                <h1 className={styles.game_title}>{gameInfo.title}</h1>
                <p className={styles.descr_text}>{gameInfo.description}</p>
                <div className={styles.btn_wrapper}>
                        <motion.button
                variants={button}
                whileHover="hover"
                whileTap="tap"
                        onClick={() => { onAddToCart(gameInfo); showNotification() }}
                className={styles.add_btn}
            >
                Add to cart
                    </motion.button>
                     <motion.button
                variants={button}
                whileHover="hover"
                whileTap="tap"
                        className={styles.add_fav_btn}
                        onClick={() => { onAddToFavorite({ user: currenUser, ...gameInfo });showFavNotification() }}
            >
                Add to favorite
                </motion.button>
                </div>
                </div>
    </div>
    )
}

export default GameInfo;