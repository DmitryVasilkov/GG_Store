import React from "react";
import { motion } from "framer-motion";
import styles from "./GameItem.module.css";
import { Link } from "react-router-dom";

const GameItem = ({ showFavNotification,  showNotification,currenUser, game, onAddToCart, favBtnTitle, onAddToFavorite, onRemoveFromFavorite}) => {
    const button = {
        hover: { scale: 1.1, transition: { duration: 0.4 } },
        tap: {scale: 0.9, transition: {duration: 0.3}}
    }
    const func = (game) => {
        onAddToFavorite({ user: currenUser, ...game });
                            showFavNotification()
    }
  
    return (
        <motion.div
            className={styles.gameItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{scale: 0.95}}
        >
            <Link
                to={`${game.id}`}
            >
                <img src={game.image} alt={game.title} className={styles.image} />
                    </Link>
            <h4 className={styles.game_title}>{game.title}</h4>
            <p className={game.newPrice ? styles.game_price_under :  styles.game_price}>{game.price}</p>
            {game.newPrice && <p className={styles.game_price_new}>{game?.newPrice}</p>}
            
                     <div className={styles.btn_wrapper}>
            <motion.button
                variants={button}
                whileHover="hover"
                whileTap="tap"
                    onClick={
                        () => { onAddToCart(game);   showNotification()}
                    }
                className={styles.add_btn}
            >
                Add to cart
                </motion.button>
                 <motion.button
                variants={button}
                whileHover="hover"
                whileTap="tap"
                    className={styles.add_fav_btn}
                    
                    onClick={() => {
                        favBtnTitle === "Remove" ? onRemoveFromFavorite(game) :
                     
                            
                            func(game)
                            
                   
                    }}
            >
                {favBtnTitle}
                    </motion.button>
                    </div>
            
        </motion.div>
    )
}

export default GameItem;