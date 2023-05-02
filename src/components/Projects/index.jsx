import { Link } from 'react-router-dom';
import styles from './Projects.module.css'
import ProjectsContainer from '../ProjectsContainer';
import { useFetch } from '../../utils/hooks';
import Loader from '../Loader';

export default function Projects() {
    const { data, isLoading, error } = useFetch('https://portfolio-132ef-default-rtdb.europe-west1.firebasedatabase.app/0.json');
    const projectsList = data?.data;

    if(error) {
        return <span>Il y a un problème</span>
    }

    return (
    <main>
        <ProjectsContainer>
            {isLoading ? <Loader /> :
            (<div className={styles.cardContainer}>
            {projectsList.sort((p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0).map((project, index) => 
            <Link to={`/portfolio/mes-projets/${project.id}`} className={styles.link} key={`mesprojets-${index}-${project.id}`}>
                <div className={styles.card}>
                    <img src={project.cover} alt={project.alt} />
                    <div className={styles.titles}>
                        <h2>{project.title}</h2>
                        <h3>{project.description}</h3>
                    </div>
                </div>
            </Link>)
          }
        </div>)}
        </ProjectsContainer>
    </main>
    )
}