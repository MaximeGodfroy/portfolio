import styled from "styled-components"

const Container = styled.section`
    margin: 130px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
`

const Title = styled.h2`
    background-color: rgba(28, 28, 26, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 15px;
    text-align: center;
    width: 200px;
    padding: 10px;
    font-size: 20px;
    margin: 0 0 10px 0;
`

const Presentation = styled.p`
    background-color: rgba(28, 28, 26, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 15px;
    text-align: center;
    width: 50%;
    padding: 20px;
    font-size: 16px;
    margin-bottom: 30px;
    @media all and (max-width: 450px) {
        font-size: 12px;
    }
`

export default function ProjectsContainer({children}) {

    return (
        <Container>
            <Title>Mes Projets</Title>
                <Presentation>
                La formation d'OpenClassRooms m'a permis de me former aux langages de base HTML, CSS et JavaScript 
                mais également aux outils puissants basés sur JavaScript  que sont React, Node.js, Express et MongoDB.< br/>
                Je me suis également initié à la gestion de projet agile et au référencement SEO d'un site dont l'indexation
                sur Google Images est accessible.
                </Presentation>
            {children}
        </Container>
    )
}