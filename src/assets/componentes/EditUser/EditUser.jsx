import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_Regress_Button from '../Single_Components/Admin_Regress_Button';
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
    flex: 1;

    @media (min-width: ${breakpoints.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
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

    @media (min-width: ${breakpoints.large}) {
        max-width: 32rem;
        padding: 1.5rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 38rem;
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
    font-size: 0.9rem; // Ajustado de 1.5rem a 0.9rem para consistencia

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

    &:disabled {
        background-color: #f5f5f5;
        cursor: not-allowed;
    }
`;

const Select = Styled.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    background-color: #fffde7;
    font-size: 0.85rem;

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
`;

const PasswordInputWrapper = Styled.div`
    position: relative;
    width: 100%;
`;

const PasswordToggleIcon = Styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #4e342e;

    @media (min-width: ${breakpoints.large}) {
        right: 12px;
    }
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; // Ajustado para consistencia con UserRegister
    flex-wrap: wrap; // Permite que los botones se ajusten en pantallas pequeñas
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

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
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

    &.disable-btn {
        background-color: #dc3545;
        color: black;

        &:hover {
            background-color: #c82333;
        }

        &:disabled {
            background-color: #dc354580;
        }
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

function EditUser() {
    const formRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const [statusUpdating, setStatusUpdating] = useState(false);
    const apicultorId = id;

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
    const accessToken = getCookie('token');

    const [formDataUser, setFormDataUser] = useState({
        username: '',
        nombreApicultor: '',
        apellidoApicultor: '',
        identificacion: '',
        telefono: '',
        correo: '',
        fechaNacimiento: '',
        nombreContactoEmergencia: '',
        contactoEmergencia: '',
        estado: 'Active'
    });

    const [showPassword, setShowPassword] = useState({
        password: false
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    useEffect(() => {
        if (!apicultorId) return;

        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://colmenaresdeleje.onrender.com/detail-beekeeper/${apicultorId}/`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener datos del apicultor');
                }

                const data = await response.json();
                setFormDataUser({
                    username: data.username || '',
                    nombreApicultor: data.first_name || '',
                    apellidoApicultor: data.last_name || '',
                    identificacion: data.identifications || '',
                    telefono: data.phone || '',
                    correo: data.email || '',
                    fechaNacimiento: data.birth_date || '',
                    nombreContactoEmergencia: data.emergency_contact_name || '',
                    contactoEmergencia: data.emergency_contact_phone || '',
                    estado: data.state === 'Activo' ? 'Active' : 'Deactivate',
                });
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        };

        fetchUserData();
    }, [apicultorId, accessToken]);

    const validateForm = (data) => {
        let errors = {};
        let isValid = true;

        const cedulaRegex = /^[0-9]{8,10}$/;
        if (data.identificacion && !cedulaRegex.test(data.identificacion)) {
            errors.identificacion = "La cédula debe contener entre 8 y 10 dígitos numéricos";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (data.correo && !emailRegex.test(data.correo)) {
            errors.correo = "Formato de correo inválido";
            isValid = false;
        }

        const telefonoRegex = /^[0-9]{7,10}$/;
        if (data.telefono && !telefonoRegex.test(data.telefono)) {
            errors.telefono = "El teléfono debe contener entre 7 y 10 dígitos";
            isValid = false;
        }

        if (data.contactoEmergencia && !telefonoRegex.test(data.contactoEmergencia)) {
            errors.contactoEmergencia = "El contacto debe contener entre 7 y 10 dígitos";
            isValid = false;
        }

        const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
        if (data.nombreApicultor && !nombreRegex.test(data.nombreApicultor)) {
            errors.nombreApicultor = "El nombre solo debe contener letras y espacios";
            isValid = false;
        }

        if (data.apellidoApicultor && !nombreRegex.test(data.apellidoApicultor)) {
            errors.apellidoApicultor = "El apellido solo debe contener letras y espacios";
            isValid = false;
        }

        if (data.nombreContactoEmergencia && !nombreRegex.test(data.nombreContactoEmergencia)) {
            errors.nombreContactoEmergencia = "El nombre solo debe contener letras y espacios";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataUser(prevState => ({
            ...prevState,
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

        const validation = validateForm(formDataUser);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        const userData = {
            first_name: formDataUser.nombreApicultor,
            last_name: formDataUser.apellidoApicultor,
            identifications: formDataUser.identificacion,
            email: formDataUser.correo,
            phone: formDataUser.telefono,
            birth_date: formDataUser.fechaNacimiento,
            emergency_contact_name: formDataUser.nombreContactoEmergencia,
            emergency_contact_phone: formDataUser.contactoEmergencia,
            state:   'Active' ,
            assignment_date: new Date().toISOString().split('T')[0]
        };

        try {
            const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-beekeeper/${apicultorId}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(JSON.stringify(errorData) || 'Error al actualizar');
            }

            setShowPopup(true);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const handleDisable = async () => {
        try {
            setStatusUpdating(true);
            const userData = {
                state: 'Deactivate'  
            };
    
            const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-state-beekeeper/${apicultorId}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al deshabilitar apicultor');
            }
    
            setFormDataUser(prev => ({
                ...prev,
                estado: 'Deactivate'  
            }));
    
            setShowPopup(true);
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setStatusUpdating(false);
        }
    };

    return (
        <Wrapper>
            <Admin_Nav_Bar />
            <BackArrowButton/>
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <FormContainer>
                            <Title>Editar Apicultor</Title>
                            <Form onSubmit={handleSubmit} ref={formRef}>
                                <Label htmlFor="username">Usuario</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    value={formDataUser.username}
                                    disabled
                                />
                                
                                <Label htmlFor="nombreApicultor">Nombre del apicultor</Label>
                                <Input
                                    type="text"
                                    id="nombreApicultor"
                                    name="nombreApicultor"
                                    placeholder="Ingrese el nombre del apicultor"
                                    value={formDataUser.nombreApicultor}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.nombreApicultor && <ErrorMessage>{errors.nombreApicultor}</ErrorMessage>}

                                <Label htmlFor="apellidoApicultor">Apellido del apicultor</Label>
                                <Input
                                    type="text"
                                    id="apellidoApicultor"
                                    name="apellidoApicultor"
                                    placeholder="Ingrese el apellido del apicultor"
                                    value={formDataUser.apellidoApicultor}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.apellidoApicultor && <ErrorMessage>{errors.apellidoApicultor}</ErrorMessage>}

                                <Label htmlFor="identificacion">Identificación</Label>
                                <Input
                                    type="number"
                                    id="identificacion"
                                    name="identificacion"
                                    placeholder="Ingrese la identificación del apicultor"
                                    value={formDataUser.identificacion}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.identificacion && <ErrorMessage>{errors.identificacion}</ErrorMessage>}

                                <Label htmlFor="correo">Correo</Label>
                                <Input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    placeholder="Ingrese el correo del apicultor"
                                    value={formDataUser.correo}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.correo && <ErrorMessage>{errors.correo}</ErrorMessage>}

                                <Label htmlFor="telefono">Teléfono</Label>
                                <Input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Ingrese el número del apicultor"
                                    value={formDataUser.telefono}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.telefono && <ErrorMessage>{errors.telefono}</ErrorMessage>}

                                <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                                <Input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    value={formDataUser.fechaNacimiento}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.fechaNacimiento && <ErrorMessage>{errors.fechaNacimiento}</ErrorMessage>}

                                <Label htmlFor="nombreContactoEmergencia">Nombre de contacto de emergencia</Label>
                                <Input
                                    type="text"
                                    id="nombreContactoEmergencia"
                                    name="nombreContactoEmergencia"
                                    placeholder="Ingrese el nombre del contacto de emergencia"
                                    value={formDataUser.nombreContactoEmergencia}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.nombreContactoEmergencia && <ErrorMessage>{errors.nombreContactoEmergencia}</ErrorMessage>}

                                <Label htmlFor="contactoEmergencia">Contacto de emergencia</Label>
                                <Input
                                    type="tel"
                                    id="contactoEmergencia"
                                    name="contactoEmergencia"
                                    placeholder="Ingrese el contacto de emergencia"
                                    value={formDataUser.contactoEmergencia}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.contactoEmergencia && <ErrorMessage>{errors.contactoEmergencia}</ErrorMessage>}

                                

                                <ButtonContainer>
                                    <Button type="submit">Actualizar</Button>
                                    <Button 
                                        type="button" 
                                        className="disable-btn"
                                        onClick={handleDisable}
                                        disabled={statusUpdating}
                                    >
                                        {statusUpdating ? 'Procesando...' : 'Deshabilitar'}
                                    </Button>
                                    <Admin_Regress_Button />
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
                    <p>El apicultor ha sido actualizado exitosamente</p>
                    <PopupButton onClick={() => setShowPopup(false)}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default EditUser;