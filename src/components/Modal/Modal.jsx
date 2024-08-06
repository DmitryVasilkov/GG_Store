import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, onEscCloseWarningModal, onBackdropCloseWarnModal   }) => {
    useEffect(() => {
        document.addEventListener('keydown', onEscCloseWarningModal )
        return () => {
               document.removeEventListener('keydown', onEscCloseWarningModal )  
        }
    })
    return (
        <div onClick={onBackdropCloseWarnModal} className={styles.backdrop}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal;