import styled from "styled-components";
import linkedin from '../../assets/linkedin.png'
import portrait from '../../assets/portrait.webp'

const Text = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: rgba(28, 28, 26, 0.8);
    box-shadow: 0 0 15px;
    border-radius: 10px;
    color: #FFFFFF;
    max-width: 500px;
    margin: 150px auto 30px auto;
    padding: 10px 0 10px 0;
    img[alt='portrait'] {
        margin-top: 30px;
    }
    a>img {
        height: 50px;
        margin: 0 0 0 40px;
    }
    div {
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    p {
        width: 90%;
    }

    @media all and (max-width: 600px) {
        max-width: 96%;
    }

    @media all and (max-width: 450px) {
        img[alt='portrait'] {
            width: 150px;
        }
    }
`

export default function Contact() {
    return (
        <Text>
            <div><img src={portrait} alt='portrait' /></div>
            <p>Pour toute nouvelle opportunité, n'hésitez pas à me contacter par mail ou sur LinkedIn :</p>
            <div>
                <a href='mailto:maximegodfroy.dev@gmail.com'><i class="fa-regular fa-envelope fa-3x"></i></a>
                <a href='https://www.linkedin.com/in/maximegodfroy/'><img src={linkedin} alt='logo linkedin'/></a>
            </div>
        </Text>
    )
}