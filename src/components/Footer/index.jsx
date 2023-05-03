import styles from './Footer.module.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div>
                <a href="https://github.com/MaximeGodfroy"><img src={github} alt="logo github" width='51.11' height='50' /></a>
                <a href='https://www.linkedin.com/in/maximegodfroy/'><img src={linkedin} alt='logo linkedin' width='50' height='50'/></a>
            </div>
            <p>Copyright © Maxime GODFROY 2023</p>
        </footer>
    )
}