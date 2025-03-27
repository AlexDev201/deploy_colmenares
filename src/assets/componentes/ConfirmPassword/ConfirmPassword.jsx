import Styled from 'styled-components';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../Single_Components/Header';
import Footer from '../Single_Components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: ${breakpoints.large}) {
    max-width: 1920px;
    margin: 0 auto;
  }
`;

const Logo = Styled.img`
  height: 50px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
    left: 8px;
  }
  @media (min-width: ${breakpoints.large}) {
    height: 60px;
    left: 15px;
  }
`;

const Title = Styled.h1`
  margin: 0;
  color: #4e342e;
  font-size: 2.3rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: clamp(2.3rem, 2.5vw, 2.8rem);
  }
`;

const Main = Styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  background-image: url("src/img/fondo(1).svg");
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding: 2rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const FormContainer = Styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    max-width: 90%;
  }
  @media (min-width: ${breakpoints.large}) {
    max-width: 32rem;
    padding: 2rem;
  }
  @media (min-width: ${breakpoints.xlarge}) {
    max-width: 38rem;
    padding: 2.5rem;
  }
`;

const FormTitle = Styled.h2`
  margin-bottom: 1rem;
  color: #4e342e;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }
`;

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: ${breakpoints.large}) {
    gap: 1rem;
  }
`;

const Label = Styled.label`
  font-weight: 500;
  color: rgb(0, 0, 0);
  text-align: left;
  font-size: 0.9rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: 1rem;
  }
`;

const InputBase = Styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ffcc80;
  border-radius: 10px;
  background-color: #fffde7;
  color: #4e342e;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ffb300;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding: 0.85rem;
    font-size: 1.1rem;
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
  transition: background-color 0.3s;

  &:hover {
    background-color: #f8c150;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding: 0.9rem;
    font-size: 1.1rem;
  }
`;

const PasswordInputWrapper = Styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = Styled(InputBase)`
  padding-right: 2.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 2rem;
  }
  @media (min-width: ${breakpoints.large}) {
    padding-right: 3rem;
  }
`;

const VisibilityToggle = Styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #4e342e;

  @media (max-width: ${breakpoints.mobile}) {
    right: 8px;
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    margin: -30px auto 15px;
    &::after {
      font-size: 30px;
    }
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 25px;
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.large}) {
    padding: 12px 35px;
    font-size: 18px;
  }
`;

const Text = Styled.div`
  font-size: ${props => props.size || '0.8rem'};
  color: ${props => props.color || '#666'};
  text-align: ${props => props.align || 'left'};
  margin-top: ${props => props.marginTop || '0'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${props => `calc(${props.size || '0.8rem'} - 0.1rem)`};
  }
  @media (min-width: ${breakpoints.large}) {
    font-size: ${props => `calc(${props.size || '0.8rem'} + 0.1rem)`};
  }
`;

function ConfirmPassword() {
  const { uidb64, token } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [visibility, setVisibility] = useState({
    newPassword: false,
    confirmPassword: false
  });
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    passwordStrength: 0
  });

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'newPassword') {
      setStatus(prev => ({
        ...prev,
        passwordStrength: checkPasswordStrength(value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      setStatus(prev => ({ ...prev, error: 'Las contraseñas no coinciden' }));
      return;
    }

    setStatus(prev => ({ ...prev, loading: true, error: '' }));

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(`https://colmenaresdeleje.onrender.com/users/password_reset_confirm/${uidb64}/${token}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: formData.newPassword,
          password2: formData.confirmPassword
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.error || 
                          data.password || 
                          data.password2 || 
                          data.detail || 
                          'Error en la respuesta del servidor';
        throw new Error(typeof errorMessage === 'object' ? JSON.stringify(errorMessage) : errorMessage);
      }
      setShowPopup(true);
      setTimeout(() => {
        navigate('/'); 
      }, 2000);

    } catch (error) {
      console.error('Error completo:', error);
      toast.error(error.message || 'Error al actualizar la contraseña');
      setStatus(prev => ({ 
        ...prev, 
        error: error.message || 'Error al procesar la solicitud. Por favor, intente nuevamente.' 
      }));
    } finally {
      setStatus(prev => ({ ...prev, loading: false }));
    }
  };

  const getPasswordStrengthColor = () => {
    const colors = ['#ff4444', '#ffbb33', '#00C851', '#007E33'];
    return colors[status.passwordStrength - 1] || colors[0];
  };

  const getPasswordStrengthText = () => {
    const texts = ['Débil', 'Media', 'Buena', 'Fuerte'];
    return texts[status.passwordStrength - 1] || '';
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        <FormContainer>
          <FormTitle>Restablecer Contraseña</FormTitle>
          <Form onSubmit={handleSubmit}>
            <Label>Nueva Contraseña</Label>
            <PasswordInputWrapper>
              <PasswordInput
                type={visibility.newPassword ? 'text' : 'password'}
                name="newPassword"
                value={formData.newPassword}
                onChange={handlePasswordChange}
                required
                placeholder='Ingrese la nueva contraseña'
                disabled={status.loading}
              />
              <VisibilityToggle 
                type="button" 
                onClick={() => setVisibility(prev => ({
                  ...prev,
                  newPassword: !prev.newPassword
                }))}
              >
                {visibility.newPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </VisibilityToggle>
            </PasswordInputWrapper>

            {formData.newPassword && (
              <>
                <div style={{ 
                  height: '4px', 
                  backgroundColor: '#eee',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  marginTop: '5px'
                }}>
                  <div style={{
                    width: `${(status.passwordStrength / 4) * 100}%`,
                    height: '100%',
                    backgroundColor: getPasswordStrengthColor(),
                    transition: 'all 0.3s'
                  }} />
                </div>
                <Text size="0.8rem" color={getPasswordStrengthColor()} align="right">
                  {getPasswordStrengthText()}
                </Text>
                <Text size="0.75rem" color="#666" marginTop="-5px">
                  La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.
                </Text>
              </>
            )}

            <Label>Confirmar Contraseña</Label>
            <PasswordInputWrapper>
              <PasswordInput
                type={visibility.confirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handlePasswordChange}
                required
                placeholder='Confirme la nueva contraseña'
                disabled={status.loading}
              />
              <VisibilityToggle 
                type="button" 
                onClick={() => setVisibility(prev => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword
                }))}
              >
                {visibility.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </VisibilityToggle>
            </PasswordInputWrapper>

            {status.error && (
              <Text size="0.875rem" color="#ff4444" marginTop="0.5rem">
                {status.error}
              </Text>
            )}

            <Button 
              type="submit"
              disabled={status.loading || !formData.newPassword || !formData.confirmPassword}
              style={{ 
                opacity: status.loading || !formData.newPassword || !formData.confirmPassword ? 0.7 : 1,
                cursor: status.loading || !formData.newPassword || !formData.confirmPassword ? 'not-allowed' : 'pointer'
              }}
            >
              {status.loading ? 'Procesando...' : 'Guardar'}
            </Button>
          </Form>
        </FormContainer>
      </Main>
      <Footer />
      <PopupOverlay isVisible={showPopup}>
        <PopupContent isVisible={showPopup}>
          <SuccessIcon />
          <PopupTitle>Contraseña actualizada correctamente</PopupTitle>
          <PopupButton onClick={() => setShowPopup(false)}>Aceptar</PopupButton>
        </PopupContent>
      </PopupOverlay>
    </Wrapper>
  );
}

export default ConfirmPassword;