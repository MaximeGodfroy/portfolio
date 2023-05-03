import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export default function Error() {
    return (
        <div className={styles.error}>
            <h2 className={styles.alert404}>404</h2>
            <h3 className={styles.description}>Oups! La page que vous demandez n'existe pas</h3>
            <Link to='/portfolio'>Retourner sur la page d'accueil</Link>
        </div>
    );
}