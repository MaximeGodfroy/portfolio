import styles from './Header.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import cv from '../../assets/cv.pdf'

export default function Header() {
    const sampleLocation = useLocation();

    return (
        <header>
            <Link className={styles.title} to="/portfolio">
                <h1>Maxime GODFROY</h1>
            </Link>
            <nav className={styles.nav}>
                {sampleLocation.pathname.endsWith('portfolio') ? <NavLink to="/portfolio" className={`${styles.link} ${styles.linkActive}`} >
                    <span>ACCUEIL</span>
                </NavLink> : <NavLink to="/portfolio" className={styles.link} >
                    <span>ACCUEIL</span>
                </NavLink>
                }
                <NavLink to="/portfolio/mes-projets" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
                    <span>MES PROJETS</span>
                </NavLink>
                <a href={cv} className={styles.link}>
                    <span>CV</span>
                </a>
                <NavLink to="/portfolio/contact" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
                    <span>CONTACT</span>
                </NavLink>
            </nav>
        </header>
    )
}