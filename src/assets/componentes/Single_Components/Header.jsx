import Styled from 'styled-components';
import logo from 'src/img/Colmenares_del_eje_logo.png';

const Cabeza_Pagina = Styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f9d77e;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 110px;
    border-radius: 0 0 12px 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1rem;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0.75rem 2rem;
        height: 90px;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 3rem;
        height: 100px;
        align-items: center;
    }
`;

const Title = Styled.h1`
    margin: 0;
    color: #4e342e;
    font-size: 2.3rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        font-size: 2rem;
        margin-right: 2rem;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        font-size: 2.2rem;
        margin-right: 3rem;
        flex-grow: 1;
        text-align: center;
    }
`;

const Logo = Styled.img`
    height: 50px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin-bottom: 10px;
    }

    @media (min-width: 800px) and (max-width: 900px) {
        position: static;
        transform: none;
        height: 45px;
        margin-left: 2rem;
    }

    @media (min-width: 900px) and (max-width: 1000px) {
        position: static;
        transform: none;
        height: 55px;
        margin-left: 3rem;
    }
`;

function Header() {
    return (
        <Cabeza_Pagina>
            <Logo src={logo} alt="Logo" />
            <Title>Colmenares del Eje</Title>
        </Cabeza_Pagina>
    )
}

export default Header;