import Styled from 'styled-components';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import BackArrowButton from '../Single_Components/BackButton';
const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    large: '1200px',
    xlarge: '1600px'
};

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    @media (min-width: ${breakpoints.large}) {
        max-width: 1920px;
    }
`;

const FormContainer = Styled.div`
    margin-top: 4px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1.2rem;
    width: 100%;
    max-width: 346px;
    border: 1px solid grey;
    min-height: 30rem;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
        margin: 0 auto;
    }

    @media (min-width: ${breakpoints.large}) {
        max-width: 346px;
        padding: 1.5rem;
    }

    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 400px;
        padding: 2rem;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (min-width: ${breakpoints.large}) {
        gap: 0.75rem;
    }
`;

const FormTitle = Styled.h2`
    margin-bottom: 0.75rem;
    color: #4e342e;
    text-align: center;

    @media (min-width: ${breakpoints.large}) {
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        margin-bottom: 1rem;
    }
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(0, 0, 0);
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem;
        margin-bottom: 0.15rem;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: 1.3rem;
        margin-bottom: 0.25rem;
    }
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ffcc80;
    border-radius: 8px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;
    margin-bottom: 0.3rem;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.5rem;
        font-size: 0.85rem;
    }
    @media (min-width: ${breakpoints.large}) {
        padding: 0.7rem;
        font-size: 1rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 0.8rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;

const Button = Styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.8rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #4e342e;
    width: 150px;
    transition: background-color 0.3s;
    margin: 20px auto 0;
    display: block;

    &:hover {
        background-color: #f8c150;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.7rem;
        font-size: 0.9rem;
        width: 130px;
    }
    @media (min-width: ${breakpoints.large}) {
        padding: 0.9rem;
        font-size: 1.1rem;
        width: 160px;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 1rem;
        font-size: 1.2rem;
        width: 170px;
    }
`;

const ErrorMessage = Styled.span`
    color: #dc2626;
    font-size: 0.8rem;
    margin-top: -0.3rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${breakpoints.large}) {
        font-size: 0.9rem;
        margin-top: -0.2rem;
        margin-bottom: 0.25rem;
    }
`;

const PopupOverlay = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: ${props => props.isVisible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = Styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 400px;
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
        width: 90%;
    }
    @media (min-width: ${breakpoints.large}) {
        width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        width: 600px;
        padding: 3rem;
    }
`;

const SuccessIcon = Styled.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #f9d77e;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: '✓';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${breakpoints.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`;

const PopupTitle = Styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: clamp(24px, 2.5vw, 28px);
    }
`;

const PopupButton = Styled.button`
    background: #f9d77e;
    color: black;
    border: none;
    padding: 10px 30px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background: #f8c150;
    }

    @media (min-width: ${breakpoints.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;



function Recoleccion() {
    const { colmenaId } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    const role = getCookie('role');
    const [formDataRecoleccion, setFormDataRecoleccion] = useState({
        produccionMiel: '',
        produccionPolen: ''
    });

    const [errors, setErrors] = useState({
        produccionMiel: '',
        produccionPolen: ''
    });

    const preventLetters = (e) => {
        if (!/[\d.]/.test(e.key) && 
            e.key !== 'Backspace' && 
            e.key !== 'Delete' && 
            e.key !== 'ArrowLeft' && 
            e.key !== 'ArrowRight') {
            e.preventDefault();
        }
        
        if (e.key === '.' && e.target.value.includes('.')) {
            e.preventDefault();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'produccionMiel' || name === 'produccionPolen') {
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setFormDataRecoleccion(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormDataRecoleccion(prev => ({
                ...prev,
                [name]: value
            }));
        }

        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formDataRecoleccion.produccionMiel) {
            newErrors.produccionMiel = 'La producción de miel es requerida';
        } else {
            const mielValue = parseFloat(formDataRecoleccion.produccionMiel);
            if (isNaN(mielValue)) {
                newErrors.produccionMiel = 'Debe ser un número válido';
            } else if (mielValue < 0) {
                newErrors.produccionMiel = 'La producción no puede ser negativa';
            } else if (mielValue > 1000) {
                newErrors.produccionMiel = 'La producción no puede exceder 1000';
            }
        }

        if (!formDataRecoleccion.produccionPolen) {
            newErrors.produccionPolen = 'La producción de polen es requerida';
        } else {
            const polenValue = parseFloat(formDataRecoleccion.produccionPolen);
            if (isNaN(polenValue)) {
                newErrors.produccionPolen = 'Debe ser un número válido';
            } else if (polenValue < 0) {
                newErrors.produccionPolen = 'La producción no puede ser negativa';
            } else if (polenValue > 1000) {
                newErrors.produccionPolen = 'La producción no puede exceder 1000';
            }
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const TodayDate = new Date();
        const harvesting_date = TodayDate.toISOString().split('T')[0];

        const token = getCookie('token');
        const formErrors = validateForm();
        
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        console.log('Datos validados:', formDataRecoleccion);
        
        setFormDataRecoleccion({
            produccionMiel: '',
            produccionPolen: ''
        });
        setErrors({});

        try {
            const response = await fetch(`https://colmenaresdeleje.onrender.com/harvesting/hive-harvesting/${colmenaId}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    harvest_date: harvesting_date,
                    honey_production: parseFloat(formDataRecoleccion.produccionMiel),
                    pollen_production: parseFloat(formDataRecoleccion.produccionPolen),
                    beekeeper: parseInt(getCookie('id_User')),
                    hive_id: parseInt(colmenaId)
                })
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Recolección exitosa");
                setShowPopup(true);
            } else {
                console.log("Datos incorrectos");
            }
        } catch(error) {
            console.log("Error");
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        navigate('/Dashboard');
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
            <BackArrowButton />
            <div className="container py-3">
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mt-3">
                        <FormContainer>
                            <Form onSubmit={handleSubmit}>
                                <FormTitle>Recolección</FormTitle>
                                
                                <Label>Producción de miel</Label>
                                <Input
                                    type="number"
                                    name="produccionMiel"
                                    placeholder="Ingrese producción de miel"
                                    value={formDataRecoleccion.produccionMiel}
                                    onChange={handleChange}
                                    onKeyPress={preventLetters}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                                {errors.produccionMiel && (
                                    <ErrorMessage>{errors.produccionMiel}</ErrorMessage>
                                )}

                                <Label>Producción de polen</Label>
                                <Input
                                    type="number"
                                    name="produccionPolen"
                                    placeholder="Ingrese producción de polen"
                                    value={formDataRecoleccion.produccionPolen}
                                    onChange={handleChange}
                                    onKeyPress={preventLetters}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                                {errors.produccionPolen && (
                                    <ErrorMessage>{errors.produccionPolen}</ErrorMessage>
                                )}

                                <Button type="submit">Enviar</Button>
                            </Form>
                        </FormContainer>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-3">
                        <Aside_Card />
                    </div>
                </div>
            </div>
            <Footer />
            <PopupOverlay isVisible={showPopup}>
                <PopupContent isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Recolección Registrada</PopupTitle>
                    <p>La recolección ha sido registrada exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default Recoleccion;