import styles from './Offers.module.css';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
                const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
    }
    return (<div className={styles.page_wrapper}>
             <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.offers_section}>
            <h1 className={styles.title}>Offers</h1>
        </section>
        </div>
    )
}

export default Offers;