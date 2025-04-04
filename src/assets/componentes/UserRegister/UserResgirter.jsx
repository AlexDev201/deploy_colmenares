import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin_Regress_Button from '../Single_Components/Admin_Regress_Button';
import BackArrowButton from '../Single_Components/BackButton';
import { useNavigate } from 'react-router-dom';

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

    /* Para pantallas grandes: limita el ancho máximo y centra el contenido */
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

    /* Para pantallas grandes: aumenta el ancho máximo y el padding */
    @media (min-width: ${breakpoints.large}) {
        max-width: 32rem; /* Usar rem para escalabilidad */
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
    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${breakpoints.large}) {
        font-size: clamp(1.7rem, 2.5vw, 2.2rem); /* Escala proporcionalmente */
        margin-bottom: 1.5rem;
    }
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    /* Para pantallas grandes: aumenta el gap para mejor espaciado */
    @media (min-width: ${breakpoints.large}) {
        gap: 0.75rem;
    }
`;

const Label = Styled.label`
    font-weight: 500;
    color: rgb(10, 10, 10);
    margin-bottom: 0.15rem;
    font-size: 0.9rem; /* Ajustado de 1.5rem a 0.9rem para consistencia */

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 0.1rem;
    }
    /* Para pantallas grandes: aumenta el tamaño de fuente */
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
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
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
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${breakpoints.large}) {
        padding: 0.5rem;
        font-size: 1rem;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        padding: 0.6rem;
        font-size: 1.1rem;
    }
`;

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Añadido para separar botones */
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
    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
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

    /* Para pantallas grandes: aumenta el tamaño de fuente */
    @media (min-width: ${breakpoints.large}) {
        font-size: 0.85rem;
        margin-top: -0.15rem;
        margin-bottom: 0.25rem;
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

    /* Ajuste responsivo para el ícono */
    @media (min-width: ${breakpoints.large}) {
        right: 12px;
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
    /* Para pantallas grandes: aumenta el tamaño del popup */
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

    /* Para pantallas grandes: aumenta el tamaño del ícono */
    @media (min-width: ${breakpoints.large}) {
        width: 90px;
        height: 90px;
        margin: -45px auto 25px;
        &::after {
            font-size: 45px;
        }
    }
`;

const ErrorIcon = Styled.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '!';
        font-size: 40px;
        color: white;
        font-weight: bold;
    }

    /* Para pantallas grandes: aumenta el tamaño del ícono */
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
    /* Para pantallas grandes: aumenta el tamaño de fuente */
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

    /* Para pantallas grandes: aumenta el padding y el tamaño de fuente */
    @media (min-width: ${breakpoints.large}) {
        padding: 12px 35px;
        font-size: 18px;
    }
`;

const AlertPopup = Styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #ff6b6b;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    animation: slideIn 0.3s ease-out forwards;
    max-width: 350px;
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    /* Ajuste para pantallas pequeñas */
    @media (max-width: ${breakpoints.mobile}) {
        top: 10px;
        right: 10px;
        padding: 10px 15px;
        max-width: 90%;
    }
`;

function UserRegister() {
    const formRef = useRef(null);
    const navigate= useNavigate();
    const TodayDate = new Date();
    const assignedDate = TodayDate.toISOString().split('T')[0];
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [errorPopupMessage, setErrorPopupMessage] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [formDataRegister, setFormDataRegister] = useState({
        username: '',
        nombreApicultor: '',
        apellidoApicultor: '',
        identificacion: '',
        password: '',
        correo: '',
        telefono: '',
        fechaNacimiento: '',
        nombreContactoEmergencia: '',
        contactoEmergencia: '',
        rol: ''
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

    
    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };
    
    const getPasswordStrengthColor = (strengthLevel) => {
        const colors = ['#ff4444', '#ffbb33', '#00C851', '#007E33'];
        return colors[strengthLevel - 1] || colors[0];
    };
    
    const getPasswordStrengthText = (strengthLevel) => {
        const texts = ['Débil', 'Media', 'Buena', 'Fuerte'];
        return texts[strengthLevel - 1] || '';
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataRegister(prevState => ({
            ...prevState,
            [name]: value
        }));
    
        if (name === 'password') {
            const strength = checkPasswordStrength(value);
            setPasswordStrength(strength);
        }
    
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const showTemporaryAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

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

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        if (data.password && !passwordRegex.test(data.password)) {
            errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial";
            isValid = false;
        }
        
        const usernameRegex = /^[a-zA-Z0-9._-]{3,20}$/;
        if (data.username && !usernameRegex.test(data.username)) {
            errors.username = "El username debe tener entre 3 y 20 caracteres y solo puede contener letras, números, puntos, guiones y guiones bajos";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        const token = getCookie('token');

        const validation = validateForm(formDataRegister);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        const userData = {
            username: formDataRegister.username,
            first_name: formDataRegister.nombreApicultor,
            last_name: formDataRegister.apellidoApicultor,
            identifications: formDataRegister.identificacion,
            password: formDataRegister.password,
            email: formDataRegister.correo,
            phone: formDataRegister.telefono,
            assignment_date: assignedDate,
            birth_date: formDataRegister.fechaNacimiento,
            state: 'Active',
            emergency_contact_name: formDataRegister.nombreContactoEmergencia,
            emergency_contact_phone: formDataRegister.contactoEmergencia,
            role: formDataRegister.rol
        };

        try {
            const response = await fetch('https://colmenaresdeleje.onrender.com/beekeepers/create-beekeeper/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.Error && typeof data.Error === 'string') {
                    if (data.Error.includes('username ya existe')) {
                        showTemporaryAlert('El nombre de usuario ya existe. Por favor, elija otro.');
                        setErrors(prev => ({...prev, username: 'Este nombre de usuario ya está en uso'}));
                        return;
                    } 
                    if (data.Error.includes('correo ya existe')) {
                        showTemporaryAlert('El correo electrónico ya está registrado.');
                        setErrors(prev => ({...prev, correo: 'Este correo ya está registrado'}));
                        return;
                    }
                    if (data.Error.includes('identificación ya existe')) {
                        showTemporaryAlert('La identificación ya está registrada en el sistema.');
                        setErrors(prev => ({...prev, identificacion: 'Esta identificación ya está registrada'}));
                        return;
                    }
                }
                
                setErrorPopupMessage(data.Error || 'Error en el registro');
                setShowErrorPopup(true);
                return;
            }
            
            setShowPopup(true);

            setFormDataRegister({
                username: '',
                nombreApicultor: '',
                apellidoApicultor: '',
                identificacion: '',
                password: '',
                correo: '',
                telefono: '',
                fechaNacimiento: '',
                estado: '',
                contactoEmergencia: '',
                nombreContactoEmergencia: '',
                rol: ''
            });

        } catch (error) {
            setErrorPopupMessage(`Error: ${error.message}`);
            setShowErrorPopup(true);
        }
    };


    const closePopup = () => {
        setShowPopup(false);
        navigate('/ViewApicultor'); 
    };

    return (
        <Wrapper>
            <Admin_Nav_Bar />
            <BackArrowButton />
            <div className='container py-3'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <FormContainer>
                            <Title>Crear Apicultor</Title>
                            <Form onSubmit={handleSubmit} ref={formRef}>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type='text'
                                    id="username"
                                    name='username'
                                    placeholder='Ingrese el username del apicultor'
                                    value={formDataRegister.username}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                                
                                <Label htmlFor="nombreApicultor">Nombre del apicultor</Label>
                                <Input
                                    type='text'
                                    id="nombreApicultor"
                                    name='nombreApicultor'
                                    placeholder='Ingrese el nombre del apicultor'
                                    value={formDataRegister.nombreApicultor}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.nombreApicultor && <ErrorMessage>{errors.nombreApicultor}</ErrorMessage>}

                                <Label htmlFor="apellidoApicultor">Apellido del apicultor</Label>
                                <Input
                                    type='text'
                                    id="apellidoApicultor"
                                    name='apellidoApicultor'
                                    placeholder='Ingrese el apellido del apicultor'
                                    value={formDataRegister.apellidoApicultor}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.apellidoApicultor && <ErrorMessage>{errors.apellidoApicultor}</ErrorMessage>}
                                
                                <Label htmlFor="identificacion">Identificación</Label>
                                <Input
                                    type='number'
                                    id="identificacion"
                                    name='identificacion'
                                    placeholder='Ingrese la identificación del apicultor'
                                    value={formDataRegister.identificacion}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.identificacion && <ErrorMessage>{errors.identificacion}</ErrorMessage>}
                                
                                <Label htmlFor="password">Contraseña</Label>
                                <PasswordInputWrapper>
                                    <Input
                                        type={showPassword.password ? 'text' : 'password'}
                                        id="password"
                                        name='password'
                                        placeholder='Ingrese la contraseña del apicultor'
                                        value={formDataRegister.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <PasswordToggleIcon onClick={() => togglePasswordVisibility('password')}>
                                        {showPassword.password ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </PasswordToggleIcon>
                                </PasswordInputWrapper>
                                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                                {formDataRegister.password && (
                                        <>
                                            <div style={{ 
                                                height: '4px', 
                                                backgroundColor: '#eee',
                                                borderRadius: '2px',
                                                overflow: 'hidden',
                                                marginTop: '5px'
                                            }}>
                                                <div style={{
                                                    width: `${(passwordStrength / 4) * 100}%`,
                                                    height: '100%',
                                                    backgroundColor: getPasswordStrengthColor(passwordStrength),
                                                    transition: 'all 0.3s'
                                                }} />
                                            </div>
                                            <Label style={{
                                                color: getPasswordStrengthColor(passwordStrength),
                                                textAlign: 'right',
                                                fontSize: '0.8rem'
                                            }}>
                                                {getPasswordStrengthText(passwordStrength)}
                                            </Label>
                                            <Label style={{
                                                color: '#666',
                                                fontSize: '0.75rem',
                                                marginTop: '-5px'
                                            }}>
                                                La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.
                                            </Label>
                                        </>
                                    )}

                                <Label htmlFor="correo">Correo</Label>
                                <Input
                                    type='email'
                                    id="correo"
                                    name='correo'
                                    placeholder='Ingrese el correo del apicultor'
                                    value={formDataRegister.correo}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.correo && <ErrorMessage>{errors.correo}</ErrorMessage>}

                                <Label htmlFor="telefono">Teléfono</Label>
                                <Input
                                    type='tel'
                                    id="telefono"
                                    name='telefono'
                                    placeholder='Ingrese el número del apicultor'
                                    value={formDataRegister.telefono}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.telefono && <ErrorMessage>{errors.telefono}</ErrorMessage>}

                                <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                                <Input
                                    type='date'
                                    id="fechaNacimiento"
                                    name='fechaNacimiento'
                                    value={formDataRegister.fechaNacimiento}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.fechaNacimiento && <ErrorMessage>{errors.fechaNacimiento}</ErrorMessage>}

                                <Label htmlFor="nombreContactoEmergencia">Nombre de contacto de emergencia</Label>
                                <Input
                                    type='text'
                                    id="nombreContactoEmergencia"
                                    placeholder='Ingrese el nombre del contacto de emergencia'
                                    name='nombreContactoEmergencia'
                                    required
                                    value={formDataRegister.nombreContactoEmergencia}
                                    onChange={handleChange}
                                />
                                {errors.nombreContactoEmergencia && <ErrorMessage>{errors.nombreContactoEmergencia}</ErrorMessage>}
                                
                                <Label htmlFor="contactoEmergencia">Contacto de emergencia</Label>
                                <Input
                                    type='tel'
                                    id="contactoEmergencia"
                                    name='contactoEmergencia'
                                    placeholder='Ingrese el contacto de emergencia'
                                    required
                                    value={formDataRegister.contactoEmergencia}
                                    onChange={handleChange}
                                />
                                {errors.contactoEmergencia && <ErrorMessage>{errors.contactoEmergencia}</ErrorMessage>}

                                <Label htmlFor="rol">Rol</Label>
                                <Select
                                    id="rol"
                                    name='rol'
                                    value={formDataRegister.rol}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione un rol</option>
                                    <option value="beekeeper">Apicultor</option>
                                    <option value="admin">Administrador</option>
                                </Select>

                                <ButtonContainer>
                                    <Button type="submit">Crear</Button>
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
                    <PopupTitle>Registro Exitoso</PopupTitle>
                    <p>El usuario ha sido registrado exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>

            <PopupOverlay isVisible={showErrorPopup}>
                <PopupContent isVisible={showErrorPopup}>
                    <ErrorIcon />
                    <PopupTitle>Error en el Registro</PopupTitle>
                    <p>{errorPopupMessage}</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>

                </PopupContent>
            </PopupOverlay>

            {showAlert && (
                <AlertPopup>
                    {alertMessage}
                </AlertPopup>
            )}
        </Wrapper>
    );
}

export default UserRegister;