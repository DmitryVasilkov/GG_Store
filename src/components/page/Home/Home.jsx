import React, {  useState } from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css"
import { Link} from "react-router-dom";
import Slider from "../../Slider/Slider";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";



const Home = ({
     currenUser,
    isLoged,
    onBackdropCloseWarnModal,
    onEscCloseWarningModal,
    onCloseWarningModal,
    isWarningModalOpen,
    setIsWarningModalOpen,
    isHomeModalOpen,
    setIsHomeModalOpen,
    onAddToCart,
    onAddToFavorite
}) => {

    const [userMessage, setUserMessage] = useState({});

    const handleFormSubmit = (evt, setNameValue, setEmailValue, setIsNameError, setIsEmailError) => {
        evt.preventDefault();
             if (evt.currentTarget.elements.Name.value === "" && evt.currentTarget.elements["E-mail"].value === "") {
                setIsEmailError(true)    
            setIsNameError(true)
            return 
        }
        if (evt.currentTarget.elements.Name.value === "" ) {
            setIsNameError(true)
            return
        }
        if (evt.currentTarget.elements["E-mail"].value === "") {
                setIsEmailError(true)
            return
        }
   
        const userMess = {
            id: new Date(0),
            name: evt.currentTarget.elements.Name.value,
            email: evt.currentTarget.elements["E-mail"].value
        }
        setUserMessage(userMess)
        setIsHomeModalOpen(true)
        setNameValue('')
        setEmailValue('')
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.home_container}
        >
            <div className={styles.total_wrapper}>
            <div className={styles.wrapper}>
                <div className={styles.text_wrapper}>
            <h1 className={styles.title}>Welcome to GG Store</h1>
                    <p className={styles.text}>Discover your future games...</p>
                    </div>
                <Link to="/games" className={styles.home_btn}>Learn more</Link>
            </div>
                <Form   handleFormSubmit={handleFormSubmit }  setIsHomeModalOpen={setIsHomeModalOpen} firstLabText="Name" secLabText="E-mail" btnText="Get discount"/>
                </div>
            <Slider
                 currenUser={ currenUser}
            isLoged={isLoged}
              onBackdropCloseWarnModal={onBackdropCloseWarnModal}
              onEscCloseWarningModal={onEscCloseWarningModal}
              onCloseWarningModal={onCloseWarningModal}
              isWarningModalOpen={isWarningModalOpen}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite} />
            {isHomeModalOpen && <Modal onBackdropCloseWarnModal={onBackdropCloseWarnModal} onEscCloseWarningModal={onEscCloseWarningModal}><p className={styles.textMessHome}>{`Thanks you,${userMessage.name}! You will receive a promocode with discount in several seconds. Check your email!`}</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
        </motion.div>
    )
}
export default Home;