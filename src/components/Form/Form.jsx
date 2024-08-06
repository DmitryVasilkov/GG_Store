import {  useState } from 'react';
import styles from './Form.module.css';

const Form = ({ firstLabText, secLabText, btnText, setIsWarningModalOpen, handleFormSubmit }) => {
        const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
        const handleInputChange = (evt) => {
        const value = evt.currentTarget.value; 
        if (evt.currentTarget.name === "Name") {
            setNameValue(value)
            setIsNameError(false)
        } 
        if (evt.currentTarget.name === "E-mail") {
            setEmailValue(value)
            setIsEmailError(false)
        }
    }

    return (
        <form onSubmit={(evt) => { handleFormSubmit(evt, setNameValue, setEmailValue, setIsNameError, setIsEmailError) }} className={styles.form}>
            <h2 className={styles.form_title}>Leave your name and e-mail and get up to 20% discount!</h2>
            <div className={styles.wrapper}>
            <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor="1">
                {firstLabText}
            </label>
                    <input onChange={handleInputChange} value={nameValue} name={firstLabText} className={styles.input} type="text" id='1' />
                    {isNameError && <p className={styles.error_text}>This field cant't be empty</p>}
            </div>
             <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor="2">
                {secLabText}
            </label>
                    <input onChange={handleInputChange} value={emailValue} name={secLabText} className={styles.input} type="text" id='2' />
                     {isEmailError && <p className={styles.error_text}>This field cant't be empty</p>}
                </div>
                </div>
            <button type='submit' className={styles.submit_btn}>{btnText}</button>
        </form>
    )
}

export default Form;