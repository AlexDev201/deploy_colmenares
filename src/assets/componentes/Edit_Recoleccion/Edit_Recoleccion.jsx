import React, { useState } from 'react';
import Styled from 'styled-components';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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

    @media (min-width: ${breakpoints.large}) {
        max-width: 1920px;
    }
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 346px; /* Alineado con el ancho del Aside_Card en desktop */
    min-height: 30rem; /* Permite que crezca según contenido */

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%; /* Ocupa todo el ancho en tablets y móviles */
        margin: 0 auto;
    }

    @media (min-width: ${breakpoints.large}) {
        max-width: 346px; /* Consistente con Aside_Card */
        padding: 1.5rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 400px; /* Ligeramente más grande en pantallas muy grandes */
        padding: 2rem;
    }
`;

const Title = Styled.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 1.2rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem);
        margin-bottom: 1.5rem;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: ${breakpoints.large}) {
        gap: 0.75rem;
    }
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    transition: border-color 0.3s;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
    }
    @media (min-width: ${breakpoints.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }

    &:focus {
        outline: none;
        border-color: #ffb300;
    }
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.85rem;
        padding: 0.35rem 0.7rem;
        width: 130px;
    }
    @media (min-width: ${breakpoints.large}) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 160px;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 0.6rem 1.2rem;
        font-size: 1.1rem;
        width: 170px;
    }
`;

const ErrorMessage = Styled.div`
    color: red;
    font-size: 0.75rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${breakpoints.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
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
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
        width: 85%;
    }
    @media (min-width: ${breakpoints.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 600px;
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

function Edit_Recoleccion() {
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();
    const recoleccionId = id;
    const { hiveId, harvestDate, honeyProduction, pollenProduction } = location.state || {};

    const [formData, setFormData] = useState({
        harvest_date: harvestDate || '',
        honey_production: honeyProduction ? honeyProduction.toString() : '',
        pollen_production: pollenProduction ? pollenProduction.toString() : '',
        hive_id: hiveId || '',
        beekeeper: ''
    });

    const [errors, setErrors] = useState({
        harvest_date: '',
        honey_production: '',
        pollen_production: ''
    });

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    const token = getCookie('token');
    const role = getCookie('role');
    const beekeeperId = getCookie('id_User');

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

    const validateForm = (formData) => {
        let errors = {};
        let isValid = true;

        if (!formData.honey_production) {
            errors.honey_production = "La producción de miel es requerida";
            isValid = false;
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.honey_production)) {
            errors.honey_production = "Ingrese un número válido (hasta 2 decimales)";
            isValid = false;
        } else if (parseFloat(formData.honey_production) < 0) {
            errors.honey_production = "El valor debe ser positivo";
            isValid = false;
        }

        if (!formData.pollen_production) {
            errors.pollen_production = "La producción de polen es requerida";
            isValid = false;
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.pollen_production)) {
            errors.pollen_production = "Ingrese un número válido (hasta 2 decimales)";
            isValid = false;
        } else if (parseFloat(formData.pollen_production) < 0) {
            errors.pollen_production = "El valor debe ser positivo";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'honey_production' || name === 'pollen_production') {
            if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const TodayDate = new Date();
        const edit_harvesting_date = TodayDate.toISOString().split('T')[0];
        const validation = validateForm(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        
        try {
            const apiData = {
                harvest_date: edit_harvesting_date,
                honey_production: parseFloat(formData.honey_production),
                pollen_production: parseFloat(formData.pollen_production),
                hive_id: typeof formData.hive_id === 'object' ? formData.hive_id.id : parseInt(formData.hive_id),
                beekeeper: parseInt(beekeeperId)
            };

            const response = await fetch(`https://colmenaresdeleje.onrender.com/harvesting/edit-hive-harvesting/${recoleccionId}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error al actualizar los datos: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            console.log('Cosecha actualizada exitosamente:', data);

            setShowPopup(true);
        } catch (error) {
            console.error('Error al enviar datos:', error);
            setError(`Error al actualizar los datos en el servidor: ${error.message}`);
        }
    };

    const handleBack = () => {
        navigate('/Dashboard');
    };

    return (
        <Wrapper>
            {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
            <BackArrowButton/>
            <div className="container py-3">
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-6 col-lg-4 mb-3 mt-3">
                        <FormContainer>
                            <Title>Editar Cosecha</Title>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Label htmlFor="honey-production">Producción de Miel (kg)</Label>
                                <Input
                                    type="number"
                                    id="honey-production"
                                    name="honey_production"
                                    placeholder="Ingrese la producción de miel"
                                    value={formData.honey_production}
                                    onChange={handleChange}
                                    onKeyDown={preventLetters}
                                    required
                                />
                                {errors.honey_production && <ErrorMessage>{errors.honey_production}</ErrorMessage>}

                                <Label htmlFor="pollen-production">Producción de Polen (kg)</Label>
                                <Input
                                    type="number"
                                    id="pollen-production"
                                    name="pollen_production"
                                    placeholder="Ingrese la producción de polen"
                                    value={formData.pollen_production}
                                    onChange={handleChange}
                                    onKeyDown={preventLetters}
                                    required
                                />
                                {errors.pollen_production && <ErrorMessage>{errors.pollen_production}</ErrorMessage>}

                                <ButtonContainer>
                                    <Button type="submit">Actualizar</Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <Button type="button" onClick={handleBack} style={{ marginTop: '10px', backgroundColor: '#e9ecef' }}>
                                        Volver
                                    </Button>
                                </ButtonContainer>
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
                    <PopupTitle>Actualización Exitosa</PopupTitle>
                    <p>La información de la cosecha ha sido actualizada correctamente</p>
                    <PopupButton onClick={() => {
                        setShowPopup(false);
                        navigate('/List_Recoleccion');
                    }}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default Edit_Recoleccion;