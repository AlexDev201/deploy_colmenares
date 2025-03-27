import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styled from 'styled-components';

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.45rem 0.9rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: bold;
    width: 150px;
    margin-top: 0.8rem;
    transition: background-color 0.3s;
    outline: none;

    &:hover {
        background-color: #f8c150;
    }

    /* Responsividad para pantallas pequeñas */
    @media (max-width: 480px) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: 1200px) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: 1600px) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`;

function Admin_Regress_Button() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/ViewApicultor');
    };
    
    return (
        <Button onClick={handleClick}>
            Apicultores
        </Button>
    );
}

export default Admin_Regress_Button;