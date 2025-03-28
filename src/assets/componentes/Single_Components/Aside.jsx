import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import { PersonStandingIcon, X, Eye, LogOut } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '/src/img/profile-pic.jpeg';
import logo from 'src/img/Colmenares_del_eje_logo.png';

function Aside_Card() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
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

  const username = getCookie('username');
  const role = getCookie('role');        
  const userId = getCookie('id_User');   
  const token = getCookie('token');
 
  const translateRole = (role) => {
    if (!role) return "";
    
    switch(role.toLowerCase()) {
      case 'admin':
        return 'Administrador';
      case 'beekeeper':
        return 'Apicultor';
      default:
        return role; 
    }
  };

  const displayRole = translateRole(role);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  const fetchUserDetails = async () => {
    if (!userId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/detail-beekeeper/${userId}/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      
      const data = await response.json();
      setUserDetails(data);
    } catch (err) {
      console.error("Error al obtener detalles del usuario:", err);
      setError("No se pudieron cargar los detalles del usuario.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleShowDetails = () => {
    fetchUserDetails();
    setShowDetailModal(true);
  };
  
  const closeModal = () => {
    setShowDetailModal(false);
  };
  
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };
  
  const handleLogout = () => {
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    window.location.href = '/'; 
  };
  
  return (
    <>
      {/* Versión para tablet/desktop */}
      <Container className="d-none d-md-block">
        <Card
          className="text-center rounded" // Eliminé "border border-1" para evitar conflictos
          style={{
            maxWidth: '346px',
            minHeight: '550px',
            maxHeight: '800px',
            margin: '0 auto',
            boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.25)', // Sombra igual a ClimaInfo
            border: '1px solid black' // Borde negro explícito
          }}
        >
          <Card.Body className="d-flex flex-column align-items-center gap-3 p-4 mr-5">
            <Card.Title as="h2" className="mb-3">{displayRole}</Card.Title>
            <img
              src={profilePic}
              alt="Perfil"
              className="rounded-circle border border-3"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover'
              }}
            />
            <Card.Title as="h3" className="mb-3">{username}</Card.Title>
            
            <Button 
              style={{ backgroundColor: "#f9d77e", color: "black", border: "1px solid black" }}
              className="mt-2 d-flex align-items-center gap-2"
              onClick={handleShowDetails}
            >
              <Eye size={18} />
              Ver detalles
            </Button>
            
            <Button 
              variant="outline-danger" 
              className="mt-2 d-flex align-items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              Cerrar sesión
            </Button>
          </Card.Body>
        </Card>
      </Container>
      
      {/* Versión para móvil */}
      <div className="d-md-none position-fixed" style={{ bottom: '20px', right: '20px', zIndex: '1000' }}>
        <Button
          variant="light"
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: '60px',
            height: '60px',
            border: '1px solid gray',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
          }}
          onClick={toggleMobileMenu}
        >
          <PersonStandingIcon size={30} />
        </Button>
        
        {showMobileMenu && (
          <Card
            className="position-absolute rounded animate__animated animate__fadeIn" 
            style={{
              width: '200px',
              bottom: '70px',
              right: '0',
              zIndex: '1001',
              animation: 'fadeIn 0.3s',
              boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.25)', 
              border: '1px solid black' 
            }}
          >
            <Card.Body className="d-flex flex-column align-items-center p-3">
              <Button
                variant="light"
                className="position-absolute top-0 end-0 border-0 p-1 m-1"
                onClick={toggleMobileMenu}
              >
                <X size={16} />
              </Button>
              <div className="d-flex align-items-center mb-2">
                <img
                  src={profilePic}
                  alt="Perfil"
                  className="rounded-circle border border-2"
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    marginRight: '10px'
                  }}
                />
                <div>
                  <p className="m-0 fw-bold">{username}</p>
                  <small className="text-muted">{displayRole}</small>
                </div>
              </div>
              
              <Button 
                size="sm"
                className="mt-2 w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  handleShowDetails();
                  toggleMobileMenu();
                }}
                style={{ backgroundColor: "#f9d77e" }}
              >
                <Eye size={14} />
                Ver detalles
              </Button>
              
              <Button 
                variant="outline-danger" 
                size="sm"
                className="mt-2 w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={14} />
                Cerrar sesión
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
      
      {/* Modal de detalles del usuario */}
      <div 
        className={`modal fade ${showDetailModal ? 'show' : ''}`} 
        tabIndex="-1" 
        aria-labelledby="userDetailModalLabel" 
        aria-hidden="true"
        style={{ display: showDetailModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={handleBackdropClick}
      >
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <img 
                src={logo}
                alt="Logo" 
                style={{ height: '35px' }} 
                className="mx-auto"
              />
              <button 
                type="button" 
                className="btn-close" 
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              {userDetails && !loading && (
                <>
                  <h5 className="modal-title text-center mb-4" id="userDetailModalLabel">Información del usuario</h5>
                  <div className="row">
                    <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                      <img
                        src={profilePic}
                        alt="Perfil"
                        className="rounded-circle border border-3 border-secondary"
                        style={{
                          width: '150px',
                          height: '150px',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-7">
                      <p><strong>Nombres:</strong> {userDetails.first_name}</p>
                      <p><strong>Apellidos:</strong> {userDetails.last_name}</p>
                      <p><strong>Identificación:</strong> {userDetails.identifications}</p>
                      <p><strong>Teléfono:</strong> {userDetails.phone}</p>
                      <p><strong>Correo:</strong> {userDetails.email}</p>
                      <p><strong>Contacto de emergencia:</strong> {userDetails.emergency_contact_name}</p>
                      <p><strong>Teléfono de emergencia:</strong> {userDetails.emergency_contact_phone}</p>
                      <p><strong>Fecha de nacimiento:</strong> {userDetails.birth_date}</p>
                      <p><strong>Fecha de asignación:</strong> {userDetails.assignment_date}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {showDetailModal && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </>
  );
}

export default Aside_Card;