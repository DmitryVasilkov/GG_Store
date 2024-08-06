import { useState } from 'react';
import CabinetSection from '../../CabinetSection/CabinetSection';
import styles from './Cabinet.module.css';
import { useNavigate } from 'react-router-dom';

const Cabinet = ({ changeUserData , users, currenUser }) => {
    const [title, setTitle] = useState("");
    const [userImage, setUserImage] = useState("");
    const changeTitle = (name) => {
        setTitle(name)
    }
    const showUserImage = (img) => {
        setUserImage(img)
    }
            const navigate = useNavigate();
        const goBack = () => {
     navigate(-1)
    }
    return (
        <div className={styles.page_wrapper}>
         <button onClick={goBack} className={styles.link}>Go back</button>
            <section className={styles.cabinet_section}>
                <div className={styles.title_wrapper}>
                <img className={styles.user_image} src={userImage}  width="100" height="100"  alt="" />
                    <h1 className={styles.title}>Hello, {title}! Welcome to personal cabinet!</h1>
                    </div>
                <CabinetSection   changeUserData={changeUserData } showUserImage={showUserImage} changeTitle={changeTitle} users={users} currenUser={currenUser}/>
            </section>
            </div>
    )
}

export default Cabinet;