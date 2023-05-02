import styles from './Slideshow.module.css'
import leftVector from '../../assets/leftVector4.png'
import rightVector from '../../assets/rightVector4.png'
import { useState } from 'react'

export default function Slideshow({ alt, pictures }) {
    const [index, setIndex] = useState(0);
    const length = pictures.length;
    function leftClick() {
        if (index === 0) {
            setIndex(length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    function rightClick() {
        if (index === length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.elementsCarousel}>
                <img className={styles.pictures} src={pictures[index]} alt={alt} />
                {length > 1 &&
                    (<>
                        <img className={styles.arrow1} src={leftVector} alt='left arrow' onClick={() => leftClick()} />
                        <img className={styles.arrow2} src={rightVector} alt='right arrow' onClick={() => rightClick()} />
                        <p className={styles.numberPictures}>{index + 1}/{length}</p>
                    </>
                    )}
            </div>
        </div>
    )
}