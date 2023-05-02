import { useLocation } from 'react-router-dom';
import styles from './MyProject.module.css'
import { useFetch } from '../../utils/hooks';
import Loader from '../Loader';
import Error from '../Error';
import Slideshow from '../Slideshow';

export default function MyProject() {
    const sampleLocation = useLocation();
    const { data, isLoading, error } = useFetch('https://portfolio-132ef-default-rtdb.europe-west1.firebasedatabase.app/0.json');
    const projectsList = data?.data;

    if(error) {
        return <span>Il y a un problème</span>
    }

    return (<>
    {isLoading ? <div className={styles.loader}><Loader /></div> : 
            projectsList.some((project) => sampleLocation.pathname.endsWith(project.id)) ? (projectsList.map((project) => sampleLocation.pathname.endsWith(project.id) &&
            <section key={project.id} className={styles.projectContainer}>
                <h2 className={styles.title1}>{project.title}</h2>
                <Slideshow alt={project.alt} pictures={project.pictures} />
                <h2 className={styles.h2}>CONTEXTE :</h2>
                <p>{project.context}</p>
                <h2 className={styles.h2}>OBJECTIFS :</h2>
                <p>{project.objectives}</p>
                {project.languages[0] !== "" && (
                <>
                <h2 className={styles.h2}>LANGAGES UTILISES :</h2>
                <div className={styles.languages}>
                   {project.languages.map((language, index) => 
                   <div key={`language-${index}`}><img src={language} alt='' /></div>)} 
                </div></>
                )}
                <h2>LIENS :</h2>
                <div className={styles.links}>
                  {project.GitHub && (<><a href={project.GitHub.link}>{project.GitHub.text}</a></>)}  
                  {project.Site && (<><a href={project.Site.link}>{project.Site.text}</a></>)}  
                </div>
                
                
            </section>)) : (<Error />)
            }
    </>
    )
}