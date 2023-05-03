import styles from './Skills.module.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.webp'
import react from '../../assets/logo192.png'
import node from '../../assets/node-logo.png'
import mongodb from '../../assets/mongodb.png'

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.h2}>Mes compétences :</h2>
            <h3>Langages : </h3>
            <div className={styles.languages}>
                <img src={html} alt='logo html' width='50' height='50'></img>
                <img src={css} alt='logo css' width='50' height='50'></img>
                <img src={js} alt='logo js' width='43.83' height='50'></img>
                <img src={react} alt='logo react' width='50' height='50'></img>
                <img src={node} alt='logo node' width='81.63' height='50'></img>
                <img src={mongodb} alt='logo mongodb' width='183.91' height='50'></img>
            </div>
            <h3>Autres compétences :</h3>
            <div className={styles.other}>
                <h4>SEO</h4>
                <h4>Figma</h4>
                <h4>Outils de gestion de projet agile</h4>
            </div>
        </section>
    )
}