import styles from "./Favorite.module.css";
import { motion } from "framer-motion";
import GameItem from "../GameItem/GameItem";

const FavoriteList = ({showFavNotification, showNotification , currenUser, favoriteItems, onAddToCart, onRemoveFromFavorite}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.gameList}
        >
            {favoriteItems.filter(game => game.user === currenUser).map(game => (
            <GameItem showFavNotification={showFavNotification} showNotification ={showNotification } favBtnTitle="Remove" key={game.id} game={game} onRemoveFromFavorite={onRemoveFromFavorite} onAddToCart={onAddToCart}/>
        ))}
        </motion.div>
    )
}

export default FavoriteList;
