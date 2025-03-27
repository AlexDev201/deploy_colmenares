import React, { useState } from 'react';
import Styled from 'styled-components';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import BackArrowButton from '../Single_Components/BackButton';
// Sistema de breakpoints
const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px'
};

const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    flex: 1;
`;

const FormContainer = Styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.25rem;
    border: 1px solid grey;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    max-width: 495px;
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
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem;
`;



const TextArea = Styled.textarea`
    width: 100%;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.96rem;
    transition: border-color 0.3s;
    min-height: 80px;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.35rem;
        font-size: 0.8rem;
        min-height: 60px;
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
`;

const PopupTitle = Styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
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
`;

function Edit_Monitoreo() {
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { id } = useParams(); 
    const navigate = useNavigate();
    const monitoreoId = id; 
    const { 
      hive_id, 
      monitoring_date, 
      queen_observations, 
      food_observations, 
      general_observations 
  } = location.state || {};

  const [formData, setFormData] = useState({
   monitoring_date: monitoring_date || '',
   queen_observations: queen_observations || '',
   food_observations: food_observations || '',
   general_observations: general_observations || '',
   hive_id: hive_id || '', 
   beekeeper: ''
});

    const [errors, setErrors] = useState({
        monitoring_date: ''
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

    const validateForm = (formData) => {
        let errors = {};
        let isValid = true;

        if (!formData.monitoring_date) {
            errors.monitoring_date = "La fecha es requerida";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

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
        const edit_monitoring_date =  TodayDate.toISOString().split('T')[0];
        const validation = validateForm(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        
        try {
            const apiData = {
                monitoring_date: edit_monitoring_date,
                queen_observations: formData.queen_observations,
                food_observations: formData.food_observations,
                general_observations: formData.general_observations,
                hive_id: formData.hive_id,
                beekeeper: parseInt(beekeeperId)
            };

            const response = await fetch(`https://colmenaresdeleje.onrender.com/monitoring/edit-beehive-monitoring/${monitoreoId}/`, {
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
            console.log('Monitoreo actualizado exitosamente:', data);

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
            <div className='container py-3'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <FormContainer>
                            <Title>Editar Monitoreo</Title>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <Form onSubmit={handleSubmit}>

                                <Label htmlFor="queen-observations">Observaciones de la Reina</Label>
                                <TextArea
                                    id="queen-observations"
                                    name="queen_observations"
                                    placeholder="Ingrese observaciones sobre la reina"
                                    value={formData.queen_observations}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="food-observations">Observaciones de Alimentación</Label>
                                <TextArea
                                    id="food-observations"
                                    name="food_observations"
                                    placeholder="Ingrese observaciones sobre la alimentación"
                                    value={formData.food_observations}
                                    onChange={handleChange}
                                />

                                <Label htmlFor="general-observations">Observaciones Generales</Label>
                                <TextArea
                                    id="general-observations"
                                    name="general_observations"
                                    placeholder="Ingrese observaciones generales"
                                    value={formData.general_observations}
                                    onChange={handleChange}
                                />

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
                    <div className="col-lg-6 col-md-12">
                        <Aside_Card className="mb-3" />
                    </div>
                </div>
            </div>
            <Footer />
            <PopupOverlay isVisible={showPopup}>
                <PopupContent isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Actualización Exitosa</PopupTitle>
                    <p>La información del monitoreo ha sido actualizada correctamente</p>
                    <PopupButton onClick={() => {
                        setShowPopup(false);
                        navigate('/List_Monitoreo'); // Redirige al listado después de cerrar el popup
                    }}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default Edit_Monitoreo;