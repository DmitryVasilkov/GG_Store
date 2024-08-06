import { useState, useRef } from 'react';
import styles from './CabinetSection.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation,Link, Outlet } from 'react-router-dom';

const CabinetSection = ({ changeUserData ,showUserImage, changeTitle, users, currenUser }) => {
    const [isPersInfoOpen, setIsPersInfoOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const location = useLocation();

    let newUserImg = "";
    
    const filePicker = useRef(null)
        const onInputFileChange = (evt) => {
        const reader = new FileReader();
            reader.readAsDataURL(evt.currentTarget.files[0])
            newUserImg = reader
        // setImageValue(reader)
            console.log(evt.currentTarget.files[0])
      
        }
    const handleChoosePhoto = () => {
        filePicker.current.click()
    }

    const onHandleEditFormSubmit = (evt) => {
        const form = evt.currentTarget.elements;
        const name = form.name.value;
        const email = form.email.value;
        const log = form.login.value;
        const password = form.password.value;
        console.log(form.image)
        const data = {
            name,
            email,
            log,
            password,
            image: newUserImg
        }
        evt.preventDefault();
        changeUserData(data)
        evt.currentTarget.reset()
        setIsEditFormOpen(false)
          
        const user = users.find(user => user.log === currenUser);
        changeTitle(user?.name)
        showUserImage(user?.image) 

    }
    

    const user = users.find(user => user.log === currenUser);
    
        changeTitle(user?.name)
    showUserImage(user?.image) 

   
    return (
        <section className={styles.cabinet_section}>
            {/* <h2 className={styles.title}>Welcome to personal cabinet!</h2> */}
            <div className={styles.subtitle_wrapper}>
                <h3 className={styles.subTitle}>Your personal information</h3>
            <button onClick={() => {
                    setIsPersInfoOpen(prevState => !prevState)
                      setIsEditFormOpen(false)
                }} className={styles.toggle_info_btn}>{isPersInfoOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            </div>
          
            {isPersInfoOpen && 
                <div className={styles.pers_info_wrapper}>
                    <div className={styles.wrapper}>
            <ul className={styles.info_list}>
                <li className={styles.info_item}>
                <p className={styles.info_text}>Name: <span className={styles.info_span}>{user.name}</span></p>
                </li>
                <li className={styles.info_item}>
                    <p className={styles.info_text}>Login: <span className={styles.info_span}>{user.log}</span></p>
                </li>
                   <li className={styles.info_item}>
                        <p className={styles.info_text}>Password: <span className={styles.info_span}>{user.password}</span></p>
                </li>
                   <li className={styles.info_item}>
                        <p className={styles.info_text}>Email: <span className={styles.info_span}>{user.email}</span></p>
                </li>
                    </ul>
                        <button onClick={() => {
                            setIsEditFormOpen(true)
                        }} className={styles.edit_btn}>Edit</button>
                        </div>
                    {isEditFormOpen && <div>
                 
                        <form onSubmit={onHandleEditFormSubmit} className={styles.edit_form}>
                        <div className={styles.main_wrapper}>
                            <div className={styles.first_input_wrapper}>
                                <div className={styles.input_wrapper}>
                                    <label htmlFor="name" className={styles.label}>New name</label>
                                    <input type="text" id='name' className={styles.input} name='name' />
                                </div>
                                <div className={styles.input_wrapper}>
                                    <label htmlFor="email" className={styles.label}>New email</label>
                                    <input type="text" id='email' className={styles.input} name='email' />
                                </div>
                            </div>
                            <div className={styles.second_input_wrapper}>
                                <div className={styles.input_wrapper}>
                                    <label htmlFor="login" className={styles.label}>New login</label>
                                    <input type="text" id='login' className={styles.input} name='login' />
                                </div>
                    
                                <div className={styles.input_wrapper}>
                                    <label htmlFor="password" className={styles.label}>New password</label>
                                    <input type="text" id='password' className={styles.input} name='password' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.third_input_wrapper}>
                            <div className={styles.input_wrapper}>
                                <button type='button' className={styles.photo_btn}
                                    onClick={handleChoosePhoto}
                                >Choose photo</button>
                            </div>
                            <input
                                name='image'
                                ref={filePicker}
                                onChange={onInputFileChange}
                                type="file" className={styles.hidden} />
                            <button className={styles.confirm_btn}>Confirm</button>
                            <button onClick={()=>{setIsEditFormOpen(false)}} type='button' className={styles.close_btn}><AiOutlineClose className={styles.cross_btn} /></button>
                        </div>
                    </form>
                    </div>
                    }
            </div>
            }
            <Link to={location.pathname === "/cabinet/history" ? "/cabinet" : "history"} className={styles.history_title}>{location.pathname === "/cabinet/history" ? "Hide order's history" : "Show order's history"}<span className={styles.icon}>{location.pathname === "/cabinet/history" ? <IoIosArrowUp /> : <IoIosArrowDown />} </span></Link>
            <Outlet/>
        </section>
    )
}

export default CabinetSection;