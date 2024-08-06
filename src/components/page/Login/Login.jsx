import LoginForm from '../../LoginForm/LoginForm';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import useAuth from '../../hook/useAuth';
import Modal from '../../Modal/Modal';
// import { useState } from 'react';

const Login = ({ handleCurrentUser, users,setIsLoged, isLoged, onBackdropCloseWarnModal, onEscCloseWarningModal, onCloseWarningModal }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useAuth();
    const goBack = () => {
     navigate(-1)
    }
    
    // const [isLogged, setIsLogged] = useState(isLoged)

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (evt) => {
      
        evt.preventDefault();
        const user = evt.currentTarget.elements.login.value;
        const password = evt.currentTarget.elements.password.value;
        if (users.find(item => item.log === user)?.password === password)
            {
            login(user, () => navigate(fromPage, { replace: true }))
            handleCurrentUser(user)
            setIsLoged(false)
        } else {
                setIsLoged(true)
        }
        // if (users.find(item => item.login === user)  && users.find(item => item.password === password)) {
        //     login(user, () => navigate(fromPage, { replace: true }))
        //     handleCurrentUser(user)
        //     setIsLoged(false)
        // } else {
        //         setIsLoged(true)
        // }
        evt.currentTarget.reset();
    }


    return (<div className={styles.login_wrapper}>
          <button onClick={goBack} className={styles.link}>Go back</button>
        <section className={styles.log_section}>
            <LoginForm users={users} handleSubmit={handleSubmit} />
            {isLoged && <Modal onBackdropCloseWarnModal ={onBackdropCloseWarnModal } onEscCloseWarningModal={onEscCloseWarningModal }><p className={styles.text}>Incorrect login or password! Please check yourself and try again!</p><button onClick={onCloseWarningModal} className={styles.modal_close_btn}>Got it</button></Modal>}
        </section>
        </div>
    )
}

export default Login;