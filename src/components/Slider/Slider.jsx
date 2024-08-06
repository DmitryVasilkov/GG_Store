import styles from './Slider.module.css';
import games from '../../data';
import { MdArrowBackIos, MdArrowForwardIos  } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [counterSlide, setCounterSlide] = useState(0);
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);
    const li = useRef();
    const ul = useRef();

    const onPrevBtnClick = () => {
  setCounterSlide(prevState => prevState - (parseInt(getComputedStyle(li.current).width)+parseInt(getComputedStyle(ul.current).columnGap)))
    }

    const onNextBtnClick = () => {

   setCounterSlide(prevState => prevState + (parseInt(getComputedStyle(li.current).width)+parseInt(getComputedStyle(ul.current).columnGap)))
    }

    useEffect(() => {
        if (counterSlide > 0) {
            setStart(false)
        }
        if (counterSlide === 0) {
            setStart(true)
        }
     
        if (counterSlide + (parseInt(getComputedStyle(li.current).width)+parseInt(getComputedStyle(ul.current).columnGap))  === (ul.current.querySelectorAll('li').length * (parseInt(getComputedStyle(li.current).width)+parseInt(getComputedStyle(ul.current).columnGap)))) {
           setEnd(true) 
        } else {
            setEnd(false)
        }

        ul.current.style.transform = `translateX(${-counterSlide}px)`
    }, [counterSlide])

    return (
        <div className={styles.slider_wrapper}>
            <button  onClick={onPrevBtnClick} className={start ? styles.prev_btn + " " + styles.disabled : styles.prev_btn}><MdArrowBackIos className={styles.left} /></button>
    
        <div className={styles.slider}>
            <ul ref={ul} className={styles.sliderList}>
                {games.map(slide => {
                    return <li key={slide.id} ref={li} className={styles.slider_item}>
                        <Link to={`games/${slide.id}`}>
                            <div className={styles.img_wrapper}>
                                <img className={styles.img} src={slide.image} alt={slide.title} />
                                </div>
                            </Link>
                    </li>
})}
            </ul>
            </div>
            <button onClick={onNextBtnClick} className={end ? styles.prev_btn + " " + styles.disabled : styles.prev_btn}><MdArrowForwardIos className={styles.right} /></button>
            
            </div>
    )
}

export default Slider