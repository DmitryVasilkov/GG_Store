import { useNavigate } from "react-router-dom";
import ContactInfo from "../../ContactInfo/ContactsInfo";
import styles from './Contacts.module.css'

const Contacts = () => {
    const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
    }
    return (<div className={styles.page_wrapper}>
 <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.contacts_section}>
                   <h1 className={styles.title}>Contacts</h1>
            <ContactInfo />
        </section>
        </div>
   
    )
}

export default Contacts;