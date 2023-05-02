import styled from 'styled-components';
import portrait from '../../assets/portrait.webp'

const Presentation = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(28, 28, 26, 0.8);
    margin: 140px auto 30px auto;
    box-shadow: 0 0 30px;
    border-radius: 10px;
    color: #FFFFFF;
    width: 70%;
    padding: 20px 20px;
    @media all and (max-width: 750px) {
        img {
            width: 100px;
        }
        flex-direction: column;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


const Bonjour = styled.h2`
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    @media all and (max-width: 750px) {
        font-size: 20px;
    }
`

const DescriptionText = styled.p`
    margin-left: 20px;
    font-size: 20px;
    text-align: justify;
    @media all and (max-width: 750px) {
        font-size: 16px;
        margin-left: 0;
    }
`

export default function Description() {

    return (
        <Presentation>
            <img src={portrait} alt='portrait' />
            <Texts>
                <Bonjour>Qui suis-je ?</Bonjour>
                <DescriptionText>Après avoir travaillé dans la recherche et développement en chimie pendant 13 ans, j’ai décidé de me reconvertir dans 
                un nouveau domaine qui satisfait ma rigueur et mon envie de me former tous les jours : le développement informatique.<br />
                Parcourez l'ensemble des projets que j'ai réalisés pendant ma formation OpenClassRooms. </DescriptionText>  
            </Texts>
        </Presentation>
    )
}