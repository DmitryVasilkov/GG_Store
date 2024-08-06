import React from "react";
import GameItem from "../GameItem/GameItem";
import { motion } from "framer-motion";
import styles from "./GameList.module.css";

function GameList({ isLoged,showFavNotification,  showNotification, currenUser, onRemoveFromFavorite, onAddToCart, games, onAddToFavorite, isWarningModalOpen}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.gameList}
        >
            {games.map(game => (
                <GameItem  isLoged={isLoged} showFavNotification={showFavNotification}   showNotification={ showNotification} currenUser={currenUser}  onRemoveFromFavorite={onRemoveFromFavorite}  isWarningModalOpen={isWarningModalOpen} favBtnTitle="Add to favorite" key={game.id} game={game} onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} />
        ))}
        </motion.div>
    )
}

export default GameList;