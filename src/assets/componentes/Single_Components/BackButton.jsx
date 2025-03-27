import React from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    large: '1200px',
    xlarge: '1600px'
};

const BackButtonContainer = Styled.div`
    position: fixed;
    top: 80px;
    left: 20px;
    z-index: 100;
    
    @media (max-width: ${breakpoints.mobile}) {
        top: 60px;
        left: 15px;
    }
    
    @media (min-width: ${breakpoints.large}) {
        top: 100px;
        left: 30px;
    }
`;

const BackButton = Styled.button`
    background-color: #f9d77e;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        background-color: #f8c150;
    }
    
    &:hover:before {
        opacity: 1;
    }
    
    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        width: 45px;
        height: 45px;
    }
    
    @media (min-width: ${breakpoints.large}) {
        width: 70px;
        height: 70px;
    }
`;

const ArrowIcon = Styled.span`
    color: #4e342e;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1;
    transform: translateX(-2px);
    transition: transform 0.3s ease;
    
    ${BackButton}:hover & {
        transform: translateX(-5px);
    }
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.8rem;
    }
    
    @media (min-width: ${breakpoints.large}) {
        font-size: 2.6rem;
    }
`;

const Tooltip = Styled.span`
    position: absolute;
    left: 50%;
    bottom: -35px;
    transform: translateX(-50%);
    background-color: #4e342e;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    
    ${BackButton}:hover & {
        opacity: 1;
        visibility: visible;
    }
    
    &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #4e342e;
    }
`;

function BackArrowButton() {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    };
    
    return (
        <BackButtonContainer>
            <BackButton onClick={handleGoBack} aria-label="Regresar">
                <ArrowIcon>←</ArrowIcon>
                <Tooltip>Regresar</Tooltip>
            </BackButton>
        </BackButtonContainer>
    );
}

export default BackArrowButton;