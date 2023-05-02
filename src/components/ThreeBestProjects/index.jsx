import { Link } from 'react-router-dom';
import styles from './ThreeBestProjects.module.css'
import { useFetch } from '../../utils/hooks';
import Loader from '../Loader';

export default function ThreeBestProjects() {
    const { data, isLoading, error } = useFetch('https://portfolio-132ef-default-rtdb.europe-west1.firebasedatabase.app/0.json');
    const projectsList = data?.data;

    if(error) {
        return <span>Il y a un problème</span>
    }

    return (<section><h2 className={styles.h2}>Une sélection de mes projets :</h2>
    <div className={styles.cardContainer}>   
    {isLoading ? (
            <Loader />) : (projectsList.sort((p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0).slice(0,3).map((project, index) => 
            <Link to={`/portfolio/mes-projets/${project.id}`} className={styles.link} key={`mes3projets-${index}-${project.id}`}>
                <div className={styles.card}>
                    <img src={project.cover} alt={project.alt} />
                    <div className={styles.titles}>
                        <h2>{project.title}</h2>
                        <h3>{project.description}</h3>
                    </div>
                </div>
                </Link>
            ))}
    </div><h2 className={styles.h2}><Link to='/portfolio/mes-projets'>Tous mes projets ici</Link></h2>
    </section>
    )
}