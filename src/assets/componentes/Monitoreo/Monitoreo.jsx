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

    @media (min-width: ${breakpoints.large}) {
        max-width: 1920px;
    }
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 346px;
    min-height: 30rem;
    position: relative;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
        margin: 0 auto;
    }

    @media (min-width: ${breakpoints.large}) {
        max-width: 346px;
        padding: 1.75rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 400px;
        padding: 2rem;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;

    @media (min-width: ${breakpoints.large}) {
        gap: 1rem;
    }
`;

const Title = Styled.h1`
    margin: 0;
    color: rgb(0, 0, 0);
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: clamp(1.8rem, 2.5vw, 2.2rem);
        margin-bottom: 1.75rem;
    }
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.25rem;
    font-size: 0.9rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.85rem;
        margin-bottom: 0.2rem;
    }
    @media (min-width: ${breakpoints.large}) {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }
`;

const Input = Styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ffcc80;
    border-radius: 10px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 1rem;
    transition: border-color 0.3s;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.6rem;
        font-size: 0.9rem;
    }
    @media (min-width: ${breakpoints.large}) {
        padding: 0.85rem;
        font-size: 1.1rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 1rem;
        font-size: 1.2rem;
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
    padding: 0.8rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #4e342e;
    width: 150px;
    transition: background-color 0.3s;
    margin-top: 15px;

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

const ErrorMessage = Styled.div`
    color: red;
    font-size: 0.8rem;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;

    @media (min-width: ${breakpoints.large}) {
        font-size: 0.9rem;
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



function Monitoreo() {
    const { colmenaId } = useParams();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});

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
    const [formData, setFormData] = useState({
        queen_observations: '',
        food_observations: '',
        general_observations: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validateForm = (formData) => {
        let errors = {};
        let isValid = true;

        if (!formData.queen_observations) {
            errors.queen_observations = "Las observaciones sobre la reina son requeridas";
            isValid = false;
        } else if (formData.queen_observations.length > 500) {
            errors.queen_observations = "Máximo 500 caracteres";
            isValid = false;
        }

        if (!formData.food_observations) {
            errors.food_observations = "Las observaciones sobre la comida son requeridas";
            isValid = false;
        } else if (formData.food_observations.length > 500) {
            errors.food_observations = "Máximo 500 caracteres";
            isValid = false;
        }

        if (!formData.general_observations) {
            errors.general_observations = "Las observaciones generales son requeridas";
            isValid = false;
        } else if (formData.general_observations.length > 500) {
            errors.general_observations = "Máximo 500 caracteres";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const TodayDate = new Date();
        const monitoring_date = TodayDate.toISOString();
        const token = getCookie('token');
        const validation = validateForm(formData);

        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        if (!colmenaId) {
            alert('No se especificó el ID de la colmena');
            return;
        }

        try {
            const apiData = {
                monitoring_date: monitoring_date,
                queen_observations: formData.queen_observations,
                food_observations: formData.food_observations,
                general_observations: formData.general_observations,
                beekeeper: parseInt(getCookie('id_User')),
                hive_id: parseInt(colmenaId)
            };

            if (!token) throw new Error('No token found');

            const response = await fetch(`https://colmenaresdeleje.onrender.com/monitoring/beehive-monitoring/${colmenaId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log('Monitoreo registrado exitosamente:', data);
            setShowPopup(true);
        } catch (error) {
            console.error('Error al enviar datos:', error);
            alert('Error al registrar el monitoreo: ' + error.message);
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
            <BackArrowButton/>
            <div className="container py-4">
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 mt-3">
                        <FormContainer>
                            <Form onSubmit={handleSubmit}>
                                <Title>Registrar Monitoreo</Title>
                                <Label>Observaciones sobre la Reina</Label>
                                <Input
                                    type="text"
                                    name="queen_observations"
                                    placeholder="Ingrese observaciones sobre la reina"
                                    value={formData.queen_observations}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.queen_observations && <ErrorMessage>{errors.queen_observations}</ErrorMessage>}

                                <Label>Observaciones sobre la Comida</Label>
                                <Input
                                    type="text"
                                    name="food_observations"
                                    placeholder="Ingrese observaciones sobre la comida"
                                    value={formData.food_observations}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.food_observations && <ErrorMessage>{errors.food_observations}</ErrorMessage>}

                                <Label>Observaciones Generales</Label>
                                <Input
                                    type="text"
                                    name="general_observations"
                                    placeholder="Ingrese observaciones generales"
                                    value={formData.general_observations}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.general_observations && <ErrorMessage>{errors.general_observations}</ErrorMessage>}

                                <ButtonContainer>
                                    <Button type="submit">Registrar</Button>
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
                    <PopupTitle>Monitoreo Registrado</PopupTitle>
                    <p>El monitoreo ha sido registrado exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default Monitoreo;