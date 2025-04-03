import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Regress_Button from '../Single_Components/Regress_Button';
import BackArrowButton from '../Single_Components/BackButton';
import { useNavigate } from 'react-router-dom';

// Sistema de breakpoints
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
    height: auto;
    width: 100%;
    max-width: 495px;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1rem;
    }
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
    font-size: 1.5rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 0.9rem;
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
    font-size: 0.95rem;
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

const ButtonContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
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
        font-size: 1rem;
        padding: 0.5rem 1rem;
        width: 160px;
    }
    @media (min-width: ${breakpoints.xlarge}) {
        font-size: 1.1rem;
        padding: 0.6rem 1.2rem;
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
        max-width: 90%;
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

const ClimaInfo = Styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 346px; /* Alineado con el ancho del Aside_Card */
    margin: 0.5rem auto; /* Centrado en lugar de margen fijo */
    border-radius: 8px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    border: 1px solid gray;
    min-width: 346px;

    h3 {
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    @media (min-width: ${breakpoints.large}) {
        padding: 1.25rem;
        h3 {
            font-size: 1.4rem;
        }
    }
`;

const DataItem = Styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.1rem 0;
    align-items: center;
    gap: 0.5rem;

    .icon {
        width: 24px;
        height: 24px;
    }

    .label {
        font-size: 1rem;
        color: black;
    }

    .value {
        font-size: 1rem;
        font-weight: 500;
        text-align: right;
    }

    @media (min-width: ${breakpoints.large}) {
        padding: 0.6rem;
        gap: 0.75rem;
        .icon {
            width: 28px;
            height: 28px;
        }
        .label, .value {
            font-size: 1.1rem;
        }
    }
`;

function HivenRegister() {
    const [showPopup, setShowPopup] = useState(false);
    const [ubicacion, setUbicacion] = useState(null);
    const [clima, setClima] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const [mostrarClima, setMostrarClima] = useState(false);
    const [mostrarPreguntaClima, setMostrarPreguntaClima] = useState(true);
    const navigate= useNavigate();

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
    const role = getCookie('role');
    const [formData, setFormData] = useState({
        cantidadCriasAbierta: '',
        cantidadCriasOperculada: '',
        presenciaReina: '',
        colorReina: '',
        origenReina: '',
        reportesGenerales: '',
        cuadrosComida: '',
        latitud: '',
        longitud: '',
        temperatura_c: '',
        temperatura_f: '',
        clima_texto: '',
        viento_kph: '',
        presion_mb: '',
        humedad: ''
    });

    const [errors, setErrors] = useState({
        cantidadCriasAbierta: '',
        cantidadCriasOperculada: '',
        presenciaReina: '',
        colorReina: '',
        origenReina: '',
        reportesGenerales: '',
        cuadrosComida: ''
    });

    useEffect(() => {
        obtenerUbicacionYClima();
    }, []);

    const obtenerUbicacionYClima = async () => {
        if ("geolocation" in navigator) {
            setCargando(true);
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;
                setUbicacion({ latitude, longitude });

                const respuestaClima = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=ca61bc45a6824e02a51185714251302&q=${latitude},${longitude}&lang=es`
                );
                
                if (!respuestaClima.ok) {
                    throw new Error('Error al obtener datos del clima');
                }

                const datosClima = await respuestaClima.json();
                const current = datosClima.current;

                setClima({
                    temperatura_c: current.temp_c,
                    temperatura_f: current.temp_f,
                    clima_texto: current.condition.text,
                    viento_kph: current.wind_kph,
                    presion_mb: current.pressure_mb,
                    humedad: current.humidity,
                    icono: current.condition.icon
                });

                setFormData(prev => ({
                    ...prev,
                    latitud: latitude,
                    longitud: longitude,
                    temperatura_c: current.temp_c,
                    temperatura_f: current.temp_f,
                    clima_texto: current.condition.text,
                    viento_kph: current.wind_kph,
                    presion_mb: current.pressure_mb,
                    humedad: current.humidity
                }));

            } catch (error) {
                setError('Error al obtener la ubicación o datos del clima');
                console.error('Error:', error);
            } finally {
                setCargando(false);
            }
        }
    };

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

        if (formData.cantidadCriasAbierta && !/^\d+(\.\d{1,2})?$/.test(formData.cantidadCriasAbierta)) {
            errors.cantidadCriasAbierta = "Ingrese un número válido (hasta 2 decimales)";
            isValid = false;
        } else if (formData.cantidadCriasAbierta && (parseFloat(formData.cantidadCriasAbierta) < 0 || parseFloat(formData.cantidadCriasAbierta) > 100)) {
            errors.cantidadCriasAbierta = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.cantidadCriasOperculada && !/^\d+(\.\d{1,2})?$/.test(formData.cantidadCriasOperculada)) {
            errors.cantidadCriasOperculada = "Ingrese un número válido (hasta 2 decimales)";
            isValid = false;
        } else if (formData.cantidadCriasOperculada && (parseFloat(formData.cantidadCriasOperculada) < 0 || parseFloat(formData.cantidadCriasOperculada) > 100)) {
            errors.cantidadCriasOperculada = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.cuadrosComida && !/^\d+(\.\d{1,2})?$/.test(formData.cuadrosComida)) {
            errors.cuadrosComida = "Ingrese un número válido (hasta 2 decimales)";
            isValid = false;
        } else if (formData.cuadrosComida && (parseFloat(formData.cuadrosComida) < 0 || parseFloat(formData.cuadrosComida) > 100)) {
            errors.cuadrosComida = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.reportesGenerales && formData.reportesGenerales.length > 500) {
            errors.reportesGenerales = "Máximo 500 caracteres";
            isValid = false;
        } else if (formData.reportesGenerales && !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,()-]+$/.test(formData.reportesGenerales)) {
            errors.reportesGenerales = "Caracteres no permitidos";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cantidadCriasAbierta' || name === 'cantidadCriasOperculada' || name === 'cuadrosComida') {
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
        
        const validation = validateForm(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        
        try {
            const apiData = {
                location: `${parseFloat(formData.latitud)},${parseFloat(formData.longitud)}`,
                open_brood_frames: parseFloat(formData.cantidadCriasAbierta),
                capped_brood_frames: parseFloat(formData.cantidadCriasOperculada),
                queen_presence: formData.presenciaReina === 'Si' ? true : false,
                queen_color: formData.colorReina,
                origin: formData.origenReina,
                food_frames: parseFloat(formData.cuadrosComida),
                observations: formData.reportesGenerales,
                id_weather_conditions: {
                    temp_c: formData.temperatura_c.toString(),
                    temp_f: formData.temperatura_f.toString(),
                    text: formData.clima_texto,
                    wind_kph: formData.viento_kph.toString(),
                    pressure_mb: formData.presion_mb.toString(),
                    humidity_indices: formData.humedad.toString(),
                },
                status:  'Active',
                beekeeper_id: parseInt(getCookie('id_User')) || null,
            };

            const response = await fetch('https://colmenaresdeleje.onrender.com/beehive/create-hive/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error al guardar los datos: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            console.log('Colmena creada exitosamente:', data);

            setShowPopup(true);

            setFormData((prev) => ({
                ...prev,
                cantidadCriasAbierta: '',
                cantidadCriasOperculada: '',
                presenciaReina: '',
                colorReina: '',
                origenReina: '',
                reportesGenerales: '',
                cuadrosComida: '',
            }));

        } catch (error) {
            console.error('Error al enviar datos:', error);
            setError(`Error al guardar los datos en el servidor: ${error.message}`);
        }
    };


    const closePopup = () => {
        setShowPopup(false);
        navigate('/Dashboard'); 
    };
    
    


    return (
        <Wrapper>
            {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
            <BackArrowButton/>
            <div className='container py-3'>
                <div className="row justify-content-center flex-column flex-lg-row align-items-start">
                    <div className="col-12 col-lg-6 mb-3 d-flex justify-content-center">
                        <FormContainer>
                            <Title>Crear Colmena</Title>
                            <Form onSubmit={handleSubmit}>
                                <Label htmlFor="cantidad-crias-abierta">Cantidad de Cuadros de Cría Abierta</Label>
                                <Input
                                    type="number"
                                    id="cantidad-crias-abierta"
                                    name="cantidadCriasAbierta"
                                    placeholder="Ingrese la cantidad de crías abierta"
                                    required
                                    value={formData.cantidadCriasAbierta}
                                    onChange={handleChange}
                                    onKeyDown={preventLetters}
                                />
                                {errors.cantidadCriasAbierta && <ErrorMessage>{errors.cantidadCriasAbierta}</ErrorMessage>}

                                <Label htmlFor="cantidad-crias-operculada">Cantidad de Cuadros de Cría Operculada</Label>
                                <Input
                                    type="number"
                                    id="cantidad-crias-operculada"
                                    name="cantidadCriasOperculada"
                                    placeholder="Ingrese la cantidad de crías operculada"
                                    required
                                    value={formData.cantidadCriasOperculada}
                                    onChange={handleChange}
                                    onKeyDown={preventLetters}
                                />
                                {errors.cantidadCriasOperculada && <ErrorMessage>{errors.cantidadCriasOperculada}</ErrorMessage>}

                                <Label htmlFor="cuadros-comida">Cuadros de Comida</Label>
                                <Input
                                    type="number"
                                    id="cuadros-comida"
                                    name="cuadrosComida"
                                    placeholder="Ingrese la cantidad de cuadros de comida"
                                    required
                                    value={formData.cuadrosComida}
                                    onChange={handleChange}
                                    onKeyDown={preventLetters}
                                />
                                {errors.cuadrosComida && <ErrorMessage>{errors.cuadrosComida}</ErrorMessage>}

                                <Label htmlFor="presencia-reina">Presencia de Reina</Label>
                                <Select
                                    id="presencia-reina"
                                    name="presenciaReina"
                                    value={formData.presenciaReina}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Si">Sí</option>
                                    <option value="No">No</option>
                                </Select>

                                <Label htmlFor="color-reina">Color de la Reina</Label>
                                <Select
                                    name="colorReina"
                                    value={formData.colorReina}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Amarilla">Amarilla</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Roja">Roja</option>
                                    <option value="Negra">Negra</option>
                                </Select>

                                <Label htmlFor="origen-reina">Origen de la Reina</Label>
                                <Select
                                    id="origen-reina"
                                    name="origenReina"
                                    required
                                    value={formData.origenReina}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Europea">Europea</option>
                                    <option value="Angelita">Angelita</option>
                                    <option value="Africanita">Africanita</option>
                                </Select>

                              

                                <Label htmlFor="reportes-generales">Reportes Generales</Label>
                                <Input
                                    type="text"
                                    id="reportes-generales"
                                    name="reportesGenerales"
                                    placeholder="Ingrese los reportes generales"
                                    required
                                    value={formData.reportesGenerales}
                                    onChange={handleChange}
                                />
                                {errors.reportesGenerales && <ErrorMessage>{errors.reportesGenerales}</ErrorMessage>}

                                <ButtonContainer>
                                    <Button type="submit">Crear</Button>
                                    <Regress_Button />
                                </ButtonContainer>
                            </Form>
                        </FormContainer>
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                        <Aside_Card className="mb-3" />
                        {clima && ubicacion && mostrarPreguntaClima && !mostrarClima && (
                            <div className="alert d-flex justify-content-between align-items-center mt-3" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '300px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    padding: '12px 16px',
                                    border: '1px solid #dee2e6'
                                }} 
                                role="alert"
                            >
                                <span style={{ fontSize: '0.9rem' }}>¿Deseas ver los datos de clima?</span>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button 
                                        className="btn btn-sm"
                                        style={{
                                            backgroundColor: '#f9d77e',
                                            border: 'none',
                                            width: '50px',
                                            fontWeight: '500'
                                        }}
                                        onClick={() => setMostrarClima(true)}
                                    >
                                        Sí
                                    </button>
                                    <button 
                                        className="btn btn-sm"
                                        style={{
                                            backgroundColor: '#e9ecef',
                                            border: 'none',
                                            width: '50px',
                                            fontWeight: '500'
                                        }}
                                        onClick={() => setMostrarPreguntaClima(false)}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        )}
                        {clima && ubicacion && mostrarClima && (
                            <ClimaInfo className='mt-3'>
                                <h3>Datos del Clima</h3>
                                <DataItem>
                                    <img src={`https:${clima.icono}`} alt="clima" className="icon"/>
                                    <span className="label">Condición</span>
                                    <span className="value">{clima.clima_texto}</span>
                                </DataItem>
                                <DataItem>
                                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="temperatura" className="icon"/>
                                    <span className="label">Temperatura</span>
                                    <span className="value">{clima.temperatura_c}°C / {clima.temperatura_f}ºF</span>
                                </DataItem>
                                <DataItem>
                                    <img src="//cdn.weatherapi.com/weather/64x64/day/119.png" alt="viento" className="icon"/>
                                    <span className="label">Viento</span>
                                    <span className="value">{clima.viento_kph} km/h</span>
                                </DataItem>
                                <DataItem>
                                    <img src="//cdn.weatherapi.com/weather/64x64/day/263.png" alt="humedad" className="icon"/>
                                    <span className="label">Humedad</span>
                                    <span className="value">{clima.humedad}%</span>
                                </DataItem>
                                <DataItem>
                                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="ubicación" className="icon"/>
                                    <span className="label">Presion</span>
                                    <span className="value">{clima.presion_mb}</span>
                                </DataItem>
                                <DataItem>
                                    <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="ubicación" className="icon"/>
                                    <span className="label">Ubicación</span>
                                    <span className="value">{ubicacion.latitude.toFixed(2)}, {ubicacion.longitude.toFixed(2)}</span>
                                </DataItem>
                            </ClimaInfo>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
            <PopupOverlay isVisible={showPopup} onClick={() => setShowPopup(false)}>
                <PopupContent isVisible={showPopup} onClick={(e) => e.stopPropagation()}>
                    <SuccessIcon />
                    <PopupTitle>Registro Exitoso</PopupTitle>
                    <p>La colmena ha sido creada exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>

                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default HivenRegister;