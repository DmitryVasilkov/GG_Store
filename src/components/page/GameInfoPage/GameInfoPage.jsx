import styles from './GameInfoPage.module.css';
import GameInfo from '../../GameInfo/GameInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import games from '../../../data';
import Modal from '../../Modal/Modal';

const GameInfoPage = ({    showFavNotification,   showNotification , currenUser, isLoged, onAddToCart, onAddToFavorite,onBackdropCloseWarnModal,onEscCloseWarningModal, onCloseWarningModal, isWarningModalOpen  }) => {
    const [gameInfo, setGameInfo] = useState({})
    
    const { id } = useParams();
    useEffect(() => {
    
        const game = games.find(game => {
            return Number(game.id) === Number(id)
        });
        setGameInfo(game)
    },[id])
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return <div className={styles.page_wrapper}>
        <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.gameInfo_section}>
        <GameInfo    showFavNotification={showFavNotification}     showNotification ={showNotification } currenUser={currenUser} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} gameInfo={gameInfo} />
            {isWarningModalOpen && <Modal onBackdropCloseWarnModal={onBackdropCloseWarnModal} onEscCloseWarningModal={onEscCloseWarningModal}><p className={styles.text}>This game is already in your favorite</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
            {isLoged && <Modal onBackdropCloseWarnModal ={onBackdropCloseWarnModal } onEscCloseWarningModal={onEscCloseWarningModal }><p className={styles.text}>Please, log in before adding to favorite</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
    </section>
    </div>
}

export default GameInfoPage;