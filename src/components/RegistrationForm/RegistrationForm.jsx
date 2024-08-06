import { useEffect, useRef, useState } from "react";
import styles from "./RegistrationForm.module.css";
import { useNavigate, Navigate } from "react-router-dom";


const RegistrationForm = ({ handleSetUserImageValue, currenUser, isWarningModalOpen, existedUser,handleRegFormSubmit }) => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [isNameError, setIsNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isLoginError, setLoginError] = useState(false);
    const [isPasswordError, setPasswordError] = useState(false);
    const [canNavigate, setCanNavigate] = useState(false);

    const navigate = useNavigate();

    const filePicker = useRef(null)
  

    // useEffect(() => {
    //     if (canNavigate) {
    //      navigate('/')
    //  }
    // },[canNavigate, navigate])
 
    const onInputFileChange = (evt) => {
        const reader = new FileReader();
        reader.readAsDataURL(evt.currentTarget.files[0])
        setImageValue(reader)
        console.log(evt.currentTarget.files[0])
    }

    useEffect(() => {
        handleSetUserImageValue(imageValue)
    },[imageValue, handleSetUserImageValue])

    const onInputChange = (evt) => {
        if (evt.currentTarget.name === "name") {
            setNameValue(evt.currentTarget.value)
            if (evt.currentTarget.value !== "") {
                setIsNameError(false)
            }
        } 
         if (evt.currentTarget.name === "email") {
             setEmailValue(evt.currentTarget.value)
                if (evt.currentTarget.value !== "") {
                setIsEmailError(false)
            }
         }
         if (evt.currentTarget.name === "login") {
             setLoginValue(evt.currentTarget.value)
                if (evt.currentTarget.value !== "") {
                setLoginError(false)
            }
         }
         if (evt.currentTarget.name === "password") {
             setPasswordValue(evt.currentTarget.value)
                if (evt.currentTarget.value !== "") {
                setPasswordError(false)
            }
        }
    }

    const handleChoosePhoto = () => {
        filePicker.current.click()
    }
        

    return (<>
        <form onSubmit={(evt) => {
     
    setIsNameError(false)
                setIsEmailError(false)
                setLoginError(false)
                setPasswordError(false)
      handleRegFormSubmit(evt, setCanNavigate, setIsNameError, setIsEmailError, setLoginError, setPasswordError)
    
            if ((!isNameError
                && !isEmailError
                && !isLoginError
                && !isPasswordError)
                && (evt.currentTarget.elements.name.value !== ""
                && evt.currentTarget.elements.email.value !== ""
                && evt.currentTarget.elements.login.value !== ""
                && evt.currentTarget.elements.password.value !== ""
                ))
            {
                if (canNavigate) {
                 navigate('/')
             }

            }
        }} className={styles.login_form}>
            <div className={styles.wrapper}>
                <div className={styles.inputs_wrapper}>
                        <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="1">
                       Name
                        </label>
                        <input onChange={onInputChange} value={nameValue} id='1' type='text' name='name' className={styles.input} />
                               {isNameError && <p className={styles.error_text}>This field cant't be empty</p>}
                    </div>
                        <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="2">
                        Email
                        </label>
                        <input onChange={onInputChange} value={emailValue} id='2' type='text' name='email' className={styles.input} />
                                {isEmailError && <p className={styles.error_text}>This field cant't be empty</p>}
                    </div>
                            <div className={styles.input_wrapper}>
                <label className={styles.label} htmlFor="3">Make up a login
                    </label>
                        <input onChange={onInputChange} value={loginValue} id='3' type="text" name='login' className={styles.input} />
                                {isLoginError && <p className={styles.error_text}>This field cant't be empty</p>}
                        </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label} htmlFor="4">
                        Make up a password
                        </label>
                        <input onChange={onInputChange} value={passwordValue} id='4' type='text' name='password' className={styles.input} />
                                {isPasswordError && <p className={styles.error_text}>This field cant't be empty</p>}
                    </div>
                    <button type="button" className={styles.photo_btn} onClick={handleChoosePhoto}>Choose photo</button>
                    <input ref={filePicker} onChange={onInputFileChange} type="file" className={styles.hidden} />
                </div>
            
                <button type='submit' className={styles.submit_btn}>Register</button>
                </div>
        </form>
        {(canNavigate) && < Navigate to="/" />}
        </>
    )
}

export default RegistrationForm;