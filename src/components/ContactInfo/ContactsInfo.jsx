import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
    return (
        <div className={styles.contacts_wrapper}>
          <address className={styles.address}>
            <p className={styles.city}>Kyiv city,</p>
            <p className={styles.street}>Dragomanova str, 14, office 171</p>
            <p className={styles.tel}>tel: <a className={styles.link} href="tel:+380991234567">+380991234567</a></p>
            <p className={styles.mail}>e-mail: <a className={styles.link} href="mailto:games@gmail.com">games@gmail.com"</a></p>
            </address>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2542.558883231324!2d30.636648999999995!3d50.412057999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1709501702692!5m2!1suk!2sua" width="800" height="500" style={{border:0}} allowFullScreen="" loading="lazy" title="map" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>)
  
}  

export default ContactInfo;