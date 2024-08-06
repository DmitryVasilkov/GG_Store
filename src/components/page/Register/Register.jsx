import RegistrationForm from '../../RegistrationForm/RegistrationForm';
import styles from './Register.module.css';
import Modal from '../../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const Register = ({
    handleSetUserImageValue,
     currenUser,
    onCloseWarningModal,
    onEscCloseWarningModal,
    onBackdropCloseWarnModal,
    isWarningModalOpen,
    existedUser,
    handleCurrentUser,
    handleRegFormSubmit }) => {
    
       const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
    }
    
    return (
        <div className={styles.reg_wrapper}>
          <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.reg_section}>
            <RegistrationForm handleSetUserImageValue={handleSetUserImageValue} currenUser={ currenUser} isWarningModalOpen={isWarningModalOpen} existedUser={existedUser} handleCurrentUser={handleCurrentUser} handleRegFormSubmit={handleRegFormSubmit} />
        {isWarningModalOpen && <Modal onBackdropCloseWarnModal={onBackdropCloseWarnModal} onEscCloseWarningModal={onEscCloseWarningModal}><p className={styles.text}>This login is already exist. Please, make up another login and try again!</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
            </section>
            </div>
    )
}

export default Register;