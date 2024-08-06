import FavoriteList from "../../FavoriteList/FavoriteList";
import styles from "./Favorite.module.css";
import { useNavigate } from "react-router-dom";

const Favorite = ({showFavNotification,showNotification ,currenUser,  favoriteItems, onAddToCart, onRemoveFromFavorite}) => {

        const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
    }
    return (
        <div className={styles.page_wrapper}>
              <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.fav_section}>
          <h1 className={styles.title}>Favorites</h1>  
          {favoriteItems.length ? <FavoriteList showFavNotification={showFavNotification} showNotification ={showNotification } currenUser={currenUser} onRemoveFromFavorite={onRemoveFromFavorite} favoriteItems={favoriteItems} onAddToCart={onAddToCart} /> : <p className={styles.text}>Your favorite page is empty. You can add your first favorite game</p>}
            </section>
            </div>
    )
}

export default Favorite;