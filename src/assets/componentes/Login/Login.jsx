import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../Single_Components/Header";
import Footer from "../Single_Components/Footer";

const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    large: '1200px',
    xlarge: '1600px'
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;

    @media (min-width: ${breakpoints.large}) {
        max-width: 1920px;
        margin: 0 auto;
    }
`;

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem;
    background-image: url("src/img/fondo(1).svg");
    background-size: cover;
    background-position: center;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0.5rem;
    }

    @media (min-width: ${breakpoints.large}) {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

const LoginContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
    padding: 2.5rem;
    width: 100%;
    max-width: 400px;
    border: 1px solid grey;
    height: 250px;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1rem;
        max-width: 90%;
    }

    @media (min-width: ${breakpoints.large}) {
        max-width: 32rem;
        padding: 3rem;
        height: 20rem;
    }

    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 38rem;
        padding: 3.5rem;
        height: 22rem;
    }
`;

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ffcc80;
    border-radius: 6px;
    background-color: rgb(243, 243, 242);
    color: #4e342e;
    font-size: 0.9rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #ffb300;
    }

    @media (min-width: ${breakpoints.large}) {
        font-size: 1rem;
        padding: 0.75rem;
    }
`;

const Button = styled.button`
    background-color: #f9d77e;
    border: none;
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 0.5rem;

    &:hover {
        background-color: #f79d60;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }

    @media (min-width: ${breakpoints.large}) {
        font-size: 1rem;
        padding: 0.75rem;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 0.9rem;
    margin-top: 0.5rem;

    &:hover {
        color: #f79d60;
    }

    @media (min-width: ${breakpoints.large}) {
        font-size: 1rem;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: ${breakpoints.large}) {
        font-size: 0.9rem;
    }
`;

const PopupOverlay = styled.div`
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

const PopupContent = styled.div`
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

    @media (min-width: ${breakpoints.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }

    @media (min-width: ${breakpoints.xlarge}) {
        max-width: 600px;
        padding: 3rem;
    }
`;

const SuccessIcon = styled.div`
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
        &::after {
            font-size: 45px;
        }
    }
`;

const ErrorIcon = styled.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #ff6b6b;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: '✕';
        font-size: 40px;
        color: white;
    }

    @media (min-width: ${breakpoints.large}) {
        width: 90px;
        height: 90px;
        &::after {
            font-size: 45px;
        }
    }
`;

const PopupTitle = styled.h2`
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

const PopupText = styled.p`
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;

    @media (min-width: ${breakpoints.large}) {
        font-size: 18px;
    }
`;

const PopupButton = styled.button`
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
        font-size: 18px;
        padding: 12px 35px;
    }
`;

const RedirectMessageOverlay = styled.div`
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

const RedirectMessageContent = styled.div`
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

    @media (min-width: ${breakpoints.large}) {
        max-width: 500px;
        padding: 2.5rem;
    }
`;

const InfoIcon = styled.div`
    width: 80px;
    height: 80px;
    margin: -40px auto 20px;
    border-radius: 50%;
    background: #3498db;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
        content: 'i';
        font-size: 40px;
        font-weight: bold;
        color: white;
    }

    @media (min-width: ${breakpoints.large}) {
        width: 90px;
        height: 90px;
        &::after {
            font-size: 45px;
        }
    }
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);

    useEffect(() => {
        const checkIfUsersExist = async () => {
            try {
                const response = await fetch("https://colmenaresdeleje.onrender.com/users/register_permision/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                if (response.ok && data.message === "Register") {
                    setShowRedirectMessage(true);
                    
                    setTimeout(() => {
                        navigate('/First_Registration');
                    }, 3000);
                }
            } catch (err) {
                console.error("Error al verificar usuarios:", err);
                setError("Error de conexión al servidor. Por favor, intente nuevamente.");
            }
        };

        checkIfUsersExist();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const response = await fetch("https://colmenaresdeleje.onrender.com/users/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (data.state === "Deactivate") {
                setPopupMessage("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador.");
                setShowErrorPopup(true);
                setIsLoading(false);
                return;
            }

            if (response.status === 403) {
                setPopupMessage("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador.");
                setShowErrorPopup(true);
                setIsLoading(false);
                return;
            }

            if (response.ok) {
                if (!data.accessToken || !data.refreshToken) {
                    throw new Error("Tokens no recibidos correctamente.");
                }
                
                document.cookie = "token=" + data.accessToken + "; path=/";
                document.cookie = "username=" + data.username + "; path=/";
                document.cookie = "role=" + data.role + "; path=/";
                document.cookie = "id_User=" + data.id_User + "; path=/";
                document.cookie = "refreshToken=" + data.refreshToken + "; path=/";

                setShowPopup(true);
                setTimeout(() => {
                    if (data.role === 'admin') {
                        navigate('/ViewApicultor');
                    } else if (data.role === 'beekeeper') {
                        navigate('/Dashboard');
                    }
                }, 2000); 
            } else {
                if (data.message && (
                    data.message.includes("desactivada") || 
                    data.message.includes("disabled") || 
                    data.message.includes("deactivated") ||
                    data.message.includes("no habilitada")
                )) {
                    setPopupMessage("Tu cuenta no se encuentra habilitada. Por favor, contacta al administrador.");
                    setShowErrorPopup(true);
                } else {
                    setError(data.message || "Error al iniciar sesión");
                }
            }
        } catch (err) {
            setError(err.message || "Error de conexión. Por favor, intente nuevamente.");
            console.error("Error durante el inicio de sesión:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Wrapper>
            <Header/>
            <Main>
                <LoginContainer>
                    <FormLogin onSubmit={handleLogin}>
                        <Input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Cargando..." : "Iniciar Sesión"}
                        </Button>
                        <StyledLink to="/RecuperarContraseña">
                            ¿Olvidaste tu contraseña?
                        </StyledLink>
                    </FormLogin>
                </LoginContainer>
            </Main>

            <Footer/>

            <PopupOverlay isVisible={showPopup}>
                <PopupContent isVisible={showPopup}>
                    <SuccessIcon />
                    <PopupTitle>Inicio de sesión exitoso</PopupTitle>
                    <PopupButton onClick={() => setShowPopup(false)}>Aceptar</PopupButton>
                </PopupContent>
            </PopupOverlay>

            <PopupOverlay isVisible={showErrorPopup}>
                <PopupContent isVisible={showErrorPopup}>
                    <ErrorIcon />
                    <PopupTitle>Cuenta no habilitada</PopupTitle>
                    <PopupText>{popupMessage}</PopupText>
                    <PopupButton onClick={() => setShowErrorPopup(false)}>Entendido</PopupButton>
                </PopupContent>
            </PopupOverlay>

            <RedirectMessageOverlay isVisible={showRedirectMessage}>
                <RedirectMessageContent isVisible={showRedirectMessage}>
                    <InfoIcon />
                    <PopupTitle>No hay usuarios registrados</PopupTitle>
                    <PopupText>Serás redirigido a la página de registro del primer usuario administrador...</PopupText>
                </RedirectMessageContent>
            </RedirectMessageOverlay>
        </Wrapper>
    );
};

export default Login;