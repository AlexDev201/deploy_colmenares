import Styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Aside_Card from '../Single_Components/Aside';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Regress_Button from '../Single_Components/Regress_Button';
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
    font-size: 0.9rem; /* Corregido de 1.5rem a 0.9rem para consistencia */

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

const Select = Styled.select`
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.4rem;
    border: 1px solid #ffcc80;
    border-radius: 5px;
    background-color: #fffde7;
    color: #4e342e;
    font-size: 0.85rem;
    font-family: 'Poppins', sans-serif;

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
    flex-wrap: wrap; /* Permite que los botones se envuelvan en pantallas pequeñas */
    gap: 10px; /* Espacio uniforme entre botones */
    margin-top: 1rem;
    
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column; /* En móviles, los botones se apilan verticalmente */
        width: 100%;
    }
    
    @media (min-width: ${breakpoints.large}) {
        gap: 15px; /* Más espacio entre botones en pantallas grandes */
    }
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
        color: white;

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

    /* Para pantallas grandes: aumenta el tamaño de fuente */
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
    transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0.1)'};
    transition: transform 0.4s ease-in-out;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1.5rem;
        max-width: 90%;
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

function EditColmena() {
    const { colmenaId } = useParams();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({});
    const [colmenaStatus, setColmenaStatus] = useState(true);
    const [statusUpdating, setStatusUpdating] = useState(false);

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
        cuadrosComida: '',
        presenciaReina: '',
        colorReina: '',
        origenReina: '',
        reportesGenerales: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!colmenaId) {
            console.error('No colmenaId provided');
            setLoading(false);
            return;
        }

        const fetchColmenaData = async () => {
            try {
                if (!token) throw new Error('No token found');

                const endpoint = role === 'admin' 
                    ? 'https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/'
                    : 'https://colmenaresdeleje.onrender.com/beehive/list-hives/';

                const response = await fetch(endpoint, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const colmena = data.find(c => c.id === parseInt(colmenaId));
                if (colmena) {
                    setFormData({
                        cantidadCriasAbierta: colmena.open_brood_frames || '',
                        cantidadCriasOperculada: colmena.capped_brood_frames || '',
                        cuadrosComida: colmena.food_frames || '',
                        presenciaReina: colmena.queen_presence ? 'Sí' : 'No',
                        colorReina: colmena.queen_color || '',
                        origenReina: colmena.origin || '',
                        reportesGenerales: colmena.observations || ''
                    });
                    setColmenaStatus(colmena.status === 'Active');
                } else {
                    throw new Error('Colmena no encontrada en la lista');
                }
            } catch (error) {
                console.error('Error al cargar datos:', error);
                setErrors({ fetch: 'Error al cargar los datos de la colmena' });
            } finally {
                setLoading(false);
            }
        };

        fetchColmenaData();
    }, [colmenaId, role, token]);

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

        if (formData.cantidadCriasAbierta && !/^\d+$/.test(formData.cantidadCriasAbierta)) {
            errors.cantidadCriasAbierta = "Ingrese un número entero válido";
            isValid = false;
        } else if (formData.cantidadCriasAbierta && (parseInt(formData.cantidadCriasAbierta) < 0 || parseInt(formData.cantidadCriasAbierta) > 100)) {
            errors.cantidadCriasAbierta = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.cantidadCriasOperculada && !/^\d+$/.test(formData.cantidadCriasOperculada)) {
            errors.cantidadCriasOperculada = "Ingrese un número entero válido";
            isValid = false;
        } else if (formData.cantidadCriasOperculada && (parseInt(formData.cantidadCriasOperculada) < 0 || parseInt(formData.cantidadCriasOperculada) > 100)) {
            errors.cantidadCriasOperculada = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.cuadrosComida && !/^\d+$/.test(formData.cuadrosComida)) {
            errors.cuadrosComida = "Ingrese un número entero válido";
            isValid = false;
        } else if (formData.cuadrosComida && (parseInt(formData.cuadrosComida) < 0 || parseInt(formData.cuadrosComida) > 100)) {
            errors.cuadrosComida = "El valor debe estar entre 0 y 100";
            isValid = false;
        }

        if (formData.reportesGenerales && formData.reportesGenerales.length > 90) {
            errors.reportesGenerales = "Máximo 90 caracteres";
            isValid = false;
        } else if (formData.reportesGenerales && !/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s.,()-]+$/.test(formData.reportesGenerales)) {
            errors.reportesGenerales = "Caracteres no permitidos";
            isValid = false;
        }

        return { isValid, errors };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            const apiData = {};
            if (formData.cantidadCriasAbierta) apiData.open_brood_frames = parseInt(formData.cantidadCriasAbierta, 10);
            if (formData.cantidadCriasOperculada) apiData.capped_brood_frames = parseInt(formData.cantidadCriasOperculada, 10);
            if (formData.cuadrosComida) apiData.food_frames = parseInt(formData.cuadrosComida, 10);
            if (formData.presenciaReina) apiData.queen_presence = formData.presenciaReina === 'Sí';
            if (formData.colorReina) apiData.queen_color = formData.colorReina;
            if (formData.origenReina) apiData.origin = formData.origenReina;
            if (formData.reportesGenerales) apiData.observations = formData.reportesGenerales;

            if (!token) throw new Error('No token found');

            const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-hive/${colmenaId}/`, {
                method: 'PATCH',
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
            console.log('Colmena actualizada exitosamente:', data);
            setShowPopup(true);
        } catch (error) {
            console.error('Error al enviar datos:', error);
            alert('Error al actualizar la colmena: ' + error.message);
        }
    };

    const handleChangeHiveState = async () => {
        if (statusUpdating) return;
        
        try {
            setStatusUpdating(true);
            const nuevoEstado = !colmenaStatus;
            
            const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-state-hive/${colmenaId}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    status: nuevoEstado ? 'Active' : 'Deactivate'
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al actualizar el estado');
            }
            
            await response.json();
            setColmenaStatus(nuevoEstado);
            alert(`Colmena ${nuevoEstado ? 'habilitada' : 'deshabilitada'} con éxito`);
        } catch (error) {
            alert(`Error: ${error.message}`);
        } finally {
            setStatusUpdating(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        navigate('/Dashboard');
    };

    if (loading) return <div>Cargando...</div>;
    if (errors.fetch) return <div>{errors.fetch}</div>;

    return (
        <Wrapper>
            {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
            <BackArrowButton/>
            <div className='container py-3'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <FormContainer>
                            <Title>Editar Colmena</Title>
                            <Form onSubmit={handleSubmit}>
                                <Label>Cantidad de Cuadros de Cría Abierta</Label>
                                <Input
                                    type='number'
                                    name='cantidadCriasAbierta'
                                    placeholder='Ingrese el número de cuadros'
                                    value={formData.cantidadCriasAbierta}
                                    onChange={handleChange}
                                />
                                {errors.cantidadCriasAbierta && <ErrorMessage>{errors.cantidadCriasAbierta}</ErrorMessage>}

                                <Label>Cantidad de Cuadros de Cría Operculada</Label>
                                <Input
                                    type='number'
                                    name='cantidadCriasOperculada'
                                    placeholder='Ingrese el número de cuadros'
                                    value={formData.cantidadCriasOperculada}
                                    onChange={handleChange}
                                />
                                {errors.cantidadCriasOperculada && <ErrorMessage>{errors.cantidadCriasOperculada}</ErrorMessage>}

                                <Label>Cuadros de Comida</Label>
                                <Input
                                    type='number'
                                    name='cuadrosComida'
                                    placeholder='Ingrese la cantidad de cuadros de comida'
                                    value={formData.cuadrosComida}
                                    onChange={handleChange}
                                />
                                {errors.cuadrosComida && <ErrorMessage>{errors.cuadrosComida}</ErrorMessage>}

                                <Label>Presencia de la Reina</Label>
                                <Select
                                    name='presenciaReina'
                                    value={formData.presenciaReina}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Sí">Sí</option>
                                    <option value="No">No</option>
                                </Select>

                                <Label>Color de Reina</Label>
                                <Select
                                    name='colorReina'
                                    value={formData.colorReina}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Blanca">Blanca</option>
                                    <option value="Amarilla">Amarilla</option>
                                    <option value="Roja">Roja</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Azul">Azul</option>
                                </Select>

                                <Label>Origen de la Reina</Label>
                                <Select
                                    name='origenReina'
                                    value={formData.origenReina}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="Africanita">Africanita</option>
                                    <option value="Europea">Europea</option>
                                    <option value="Asiatica">Asiática</option>
                                </Select>

                                <Label>Observaciones Generales</Label>
                                <Input
                                    type='text'
                                    name='reportesGenerales'
                                    placeholder='Ingrese las observaciones generales'
                                    value={formData.reportesGenerales}
                                    onChange={handleChange}
                                />
                                {errors.reportesGenerales && <ErrorMessage>{errors.reportesGenerales}</ErrorMessage>}

                                <ButtonContainer>
                                    <Button type="submit">
                                        Actualizar
                                    </Button>
                                    <Button 
                                        type="button" 
                                        onClick={handleChangeHiveState}
                                        style={{ 
                                            backgroundColor: '#dc3545' 
                                        }}
                                        disabled={statusUpdating}
                                    >
                                        {statusUpdating ? 'Procesando...' : ( 'Deshabilitar' )}
                                    </Button>
                                    <Regress_Button style={{ width: '100%' }} /> 
                                </ButtonContainer>
                            </Form>
                        </FormContainer>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Aside_Card />
                    </div>
                </div>
            </div>
            <Footer />
            <PopupOverlay isVisible={showPopup}>
                <PopupContent isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Actualización Exitosa</PopupTitle>
                    <p>La colmena ha sido actualizada exitosamente</p>
                    <PopupButton onClick={closePopup}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>
        </Wrapper>
    );
}

export default EditColmena;