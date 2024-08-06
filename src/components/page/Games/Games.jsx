import { useNavigate } from "react-router-dom";
import Filter from "../../Filter/Filter";
import GameList from "../../GameList/GameList";
import styles from './Games.module.css';
import Modal from "../../Modal/Modal";

const Games = ({
    showFavNotification,
    showNotification,
    currenUser,
    isLoged,
    onRemoveFromFavorite,
    onAddToCart,
    games,
    handleFilterGames,
    onAddToFavorite,
    isWarningModalOpen,
    onCloseWarningModal,
    onEscCloseWarningModal,
    onBackdropCloseWarnModal }) => {
    const navigate = useNavigate();
    const goBack = () => {
     navigate(-1)
    }
 
    return (
        <div className={styles.page_wrapper}>
                <div className={styles.wrapper}>
            <button onClick={goBack} className={styles.link}>Go back</button>
                    <Filter handleFilterGames={handleFilterGames} placeholderText="Find game..." />
                    </div>
        <section className={styles.games_section}>
                {games.length ? <GameList isLoged={isLoged} showFavNotification={showFavNotification}   showNotification={showNotification} currenUser={currenUser} onRemoveFromFavorite={onRemoveFromFavorite}  isWarningModalOpen={isWarningModalOpen} onAddToFavorite={onAddToFavorite} games={games} onAddToCart={onAddToCart} /> : <p className={styles.warning_text}>There is no game matches to your request</p>}
                {isWarningModalOpen && <Modal onBackdropCloseWarnModal={onBackdropCloseWarnModal} onEscCloseWarningModal={onEscCloseWarningModal}><p className={styles.text}>This game is already in your favorite</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
                {isLoged && <Modal onBackdropCloseWarnModal ={onBackdropCloseWarnModal } onEscCloseWarningModal={onEscCloseWarningModal }><p className={styles.text}>Please, log in before adding to favorite</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
            </section>
            </div>
    )
}

export default Games;