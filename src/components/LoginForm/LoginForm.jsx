import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleSubmit }) => {
    // console.log('load')
    return (
        <form onSubmit={handleSubmit} className={styles.login_form}>
            <div className={styles.wrapper}>
            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="1">Login
                    </label>
                                        <input id='1' type="text" name='login' className={styles.input} placeholder='Enter your login...'/>
                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="2">
                        Password
                        </label>
                                                <input id='2' type='text' name='password' className={styles.input} placeholder='Enter your password...'/>
                    </div>
                        <p className={styles.question_text}>Still don't have an account? Click here for
                         <Link to="/register" className={styles.link_auth_reg}>Registration</Link>
                     </p>
                </div>
            
                <button type='submit' className={styles.submit_btn}>Log in</button>
                </div>
        </form>
    )
}

export default LoginForm;