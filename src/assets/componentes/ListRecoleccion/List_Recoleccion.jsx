import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Card, Container, Row, Col, Form, Modal, Button, Spinner } from 'react-bootstrap';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Footer from '../Single_Components/Footer';
import Aside_Card from '../Single_Components/Aside';
import imagen2 from 'src/img/imagen_ejemplo.jpg';
import BackArrowButton from '../Single_Components/BackButton';
import logo from 'src/img/Colmenares_del_eje_logo.png';

function List_Recoleccion() {
  const navigate = useNavigate();
  const { colmenaId } = useParams(); // Obtenemos el ID de la colmena de la URL
  const [recolecciones, setRecolecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecoleccionId, setSelectedRecoleccionId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [beekeeperInfo, setBeekeeperInfo] = useState(null);
  const [colmenasRelacionadas, setColmenasRelacionadas] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true); // Nuevo estado para el orden
  const [modalAnimation, setModalAnimation] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectValues, setSelectValues] = useState({});
  
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;}
  const token = getCookie('token');
  const role = getCookie('role');
  
  // Función para ordenar las recolecciones por fecha
  const ordenarPorFecha = () => {
    const recoleccionesOrdenadas = [...recolecciones].sort((a, b) => {
      const fechaA = new Date(a.harvest_date);
      const fechaB = new Date(b.harvest_date);
      return ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
    });
    
    setRecolecciones(recoleccionesOrdenadas);
    setOrdenAscendente(!ordenAscendente);
  };
  
  // Crear estilos CSS dinámicos para la animación
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .recoleccion-card {
        transition: all 0.3s ease;
        transform: translateZ(0);
        cursor: pointer;
      }
      .recoleccion-card:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        transform: translateY(-5px) !important;
      }
      .honey-button {
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .honey-button:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: radial-gradient(circle, transparent 10%, rgba(255,255,0,0.1) 10.01%);
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s;
      }
      .honey-button:active:after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Efecto para manejar la animación al abrir el modal
  useEffect(() => {
    if (showPopup) {
      setModalAnimation('animate-modal-in');
      // Mostrar los detalles con un pequeño retraso para crear efecto secuencial
      setTimeout(() => {
        setDetailsVisible(true);
      }, 300);
    } else {
      setModalAnimation('animate-modal-out');
      setDetailsVisible(false);
    }
  }, [showPopup]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://colmenaresdeleje.onrender.com/harvesting/list-hive-harvesting/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const result = await response.json();
        
        // Filtrar solo las recolecciones con estado "Active"
        const recoleccionesActivas = result.filter(
          recoleccion => recoleccion.status === "Active"
        );
        
        // Luego filtramos por colmenaId si está presente
        if (colmenaId) {
          const recoleccionesFiltradas = recoleccionesActivas.filter(
            recoleccion => recoleccion.hive_id.toString() === colmenaId
          );
          setRecolecciones(recoleccionesFiltradas);
          
          // Si hay recolecciones, podemos obtener info del apicultor de la primera
          if (recoleccionesFiltradas.length > 0) {
            const beekeeperId = recoleccionesFiltradas[0].beekeeper;
            await fetchBeekeeperInfo(beekeeperId);
            await fetchRelatedHives(beekeeperId);
          }
        } else {
          // Si no hay colmenaId, mostramos todas las recolecciones activas
          setRecolecciones(recoleccionesActivas);
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchBeekeeperInfo = async (beekeeperId) => {
      try {
        const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/${beekeeperId}/`);
        if (!response.ok) {
          throw new Error('Error al obtener información del apicultor');
        }
        const data = await response.json();
        setBeekeeperInfo(data);
      } catch (error) {
        console.error("Error al cargar datos del apicultor:", error);
      }
    };

    const fetchRelatedHives = async (beekeeperId) => {
      try {
        const response = await fetch(`https://colmenaresdeleje.onrender.com/hives/beekeeper/${beekeeperId}/`);
        if (!response.ok) {
          throw new Error('Error al obtener colmenas relacionadas');
        }
        const data = await response.json();
        setColmenasRelacionadas(data);
      } catch (error) {
        console.error("Error al cargar colmenas relacionadas:", error);
      }
    };

    fetchData();
  }, [colmenaId, token]);

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const handleSelectChange = (e, recoleccionId) => {
    setSelectValues({
      ...selectValues,
      [recoleccionId]: e.target.value
    });
    
    if (e.target.value === 'visualizar-detalles') {
      setSelectedRecoleccionId(null);
      setTimeout(() => {
        setSelectedRecoleccionId(recoleccionId);
        setShowPopup(true);
      }, 10);
    }
  };

  const closePopup = () => {
    if (selectedRecoleccionId) {
      setSelectValues({
        ...selectValues,
        [selectedRecoleccionId]: ''
      });
    }
    setShowPopup(false);
    setTimeout(() => {
      setSelectedRecoleccionId(null);
    }, 400);
  };

  const getSelectedRecoleccion = () => {
    return recolecciones.find(r => r.id === selectedRecoleccionId);
  };

  const handleEditRecoleccion = (recoleccionId) => {
    const selectedRecoleccion = getSelectedRecoleccion();
    navigate(`/Edit_Recoleccion/${recoleccionId}`, {
      state: {
        hiveId: selectedRecoleccion.hive_id,
        harvestDate: selectedRecoleccion.harvest_date,
        honeyProduction: selectedRecoleccion.honey_production,
        pollenProduction: selectedRecoleccion.pollen_production
      }
    });
  };

  // Estilos para las animaciones
  const modalStyles = {
    animateModalIn: {
      animation: 'fadeIn 0.3s ease-out forwards',
    },
    animateModalOut: {
      animation: 'fadeOut 0.3s ease-in forwards',
    },
    detailsAnimation: {
      opacity: detailsVisible ? 1 : 0,
      transform: detailsVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    },
    modalContent: {
      transform: showPopup ? 'scale(1)' : 'scale(0.8)',
      transition: 'transform 0.3s ease',
    }
  };
  
  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <BackArrowButton/>
      <Container fluid className="flex-grow-1 py-3">
        <Row>
          <Col xs={12} lg={8} xl={7} className="mb-4 mx-auto">
            {/* Título y botón de ordenación */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0">Recolecciones Activas</h4>
              {!loading && recolecciones.length > 0 && (
                <Button 
                  variant="outline-warning" 
                  size="sm" 
                  onClick={ordenarPorFecha}
                  className="d-flex align-items-center gap-1 honey-button"
                >
                  <span>Ordenar por fecha</span>
                  <i className={`bi bi-sort-${ordenAscendente ? 'down' : 'up'}`}></i>
                  {ordenAscendente ? " ↑" : " ↓"}
                </Button>
              )}
            </div>
            
            <div className="d-flex flex-column gap-3">
              {loading ? (
                <div className="text-center p-4">
                  <Spinner animation="border" variant="warning" />
                  <p className="mt-2 text-muted">Cargando recolecciones activas...</p>
                </div>
              ) : error ? (
                <Card className="shadow-sm border-danger p-3">
                  <Card.Body className="text-center text-danger">
                    {error}
                  </Card.Body>
                </Card>
              ) : recolecciones.length === 0 ? (
                <Card className="shadow-sm p-3">
                  <Card.Body className="text-center">
                    <p>No hay recolecciones activas disponibles para esta colmena</p>
                  </Card.Body>
                </Card>
              ) : (
                recolecciones.map((recoleccion, index) => (
                  <Card 
                    key={recoleccion.id} 
                    className="shadow-lg border rounded p-3 mx-2 mx-md-3 recoleccion-card"
                    style={{
                      animation: `fadeIn 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <Row className="g-0 align-items-center">
                      <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                        <img 
                          src={imagen2} 
                          alt={`Recolección del ${formatDate(recoleccion.harvest_date)}`}
                          className="img-fluid rounded"
                          style={{ 
                            maxHeight: '200px', 
                            width: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} 
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                      </Col>
                      <Col xs={12} sm={5} className="text-center text-sm-start mb-3 mb-sm-0">
                        <h3 className="mb-1 ms-0 ms-sm-3">Fecha: {formatDate(recoleccion.harvest_date)}</h3>
                        <p className="mb-1 ms-0 ms-sm-3">Numero de colmena: {recoleccion.hive_id}</p>
                        <p className="mb-0 ms-0 ms-sm-3">Producción de Miel: {recoleccion.honey_production} gr</p>
                        <p className="mb-0 ms-0 ms-sm-3">Producción de Polen: {recoleccion.pollen_production} gr</p>
                        <p className="mb-0 ms-0 ms-sm-3">
                          <span className="badge bg-success">Activa</span>
                        </p>
                      </Col>
                      <Col xs={12} sm={3} className="text-center">
                        <Form.Select 
                          size="sm" 
                          className="bg-warning-subtle border-warning-subtle"
                          onChange={(e) => handleSelectChange(e, recoleccion.id)}
                          value={selectValues[recoleccion.id] || ''}
                        >
                          <option value="">Seleccionar</option>
                          <option value="visualizar-detalles">Visualizar Detalles</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Card>
                ))
              )}
            </div>
          </Col>

          <Col xs={12} lg={4} xl={3}>
            <Aside_Card />
          </Col>
        </Row>
      </Container>

      <Footer />

      {/* Modal con React Bootstrap y animaciones */}
      <div 
        className={`modal fade ${showPopup ? 'show' : ''}`} 
        tabIndex="-1"
        onClick={closePopup}
        style={{ 
          display: showPopup ? 'block' : 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          ...modalStyles[modalAnimation]
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div 
            className="modal-content"
            style={modalStyles.modalContent}
          >
            <div className="modal-header border-0 pb-0">
              <img 
                src={logo}
                alt="Logo" 
                style={{ 
                  height: '35px',
                  animation: showPopup ? 'spin 1s ease-in-out' : 'none'
                }} 
                className="mx-auto" 
              />
              <Button 
                variant="light" 
                className="btn-close" 
                onClick={closePopup}
              />
            </div>
            
            <div className="modal-body">
              {selectedRecoleccionId && (
                (() => {
                  const selectedRecoleccion = getSelectedRecoleccion();
                  if (selectedRecoleccion) {
                    return (
                      <div style={modalStyles.detailsAnimation}>
                        <h2 className="text-center mb-4">Información de la Recolección</h2>
                        <Row>
                          <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
                            <img 
                              src={imagen2}
                              alt="Imagen recolección"
                              className="rounded-circle border border-3 border-secondary"
                              style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                              onMouseOver={(e) => e.target.style.transform = 'scale(1.05) rotate(5deg)'} 
                              onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                            />
                            <div className="d-flex flex-column gap-2 mt-3">
                              <Button 
                                variant="warning" 
                                onClick={() => handleEditRecoleccion(selectedRecoleccion.id)}
                                className="px-4 d-flex align-items-center gap-2 mx-auto honey-button"
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.2s',
                                  opacity: 0
                                }}
                              >
                                <i className="bi bi-pencil-square"></i>
                                Editar Recolección
                              </Button>
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            {[
                              { label: "Fecha", value: formatDate(selectedRecoleccion.harvest_date) },
                              { label: "Producción de Miel", value: `${selectedRecoleccion.honey_production} gr` },
                              { label: "Producción de Polen", value: `${selectedRecoleccion.pollen_production} gr` },
                              { label: "Numero de colmena", value: selectedRecoleccion.hive_id },
                              { label: "Estado", value: "Activa" },
                              { label: "Apicultor", value: selectedRecoleccion.beekeeper ? 
                                `${selectedRecoleccion.beekeeper.first_name} ${selectedRecoleccion.beekeeper.last_name}` :
                                'Información no disponible' }
                            ].map((item, index) => (
                              <p 
                                key={index}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: `${0.1 + (index * 0.1)}s`,
                                  opacity: 0,
                                  transform: 'translateY(10px)'
                                }}
                              >
                                <strong>{item.label}:</strong> {item.value}
                              </p>
                            ))}
                          </Col>
                        </Row>
                      </div>
                    );
                  } else {
                    return <p className="text-center">No se encontró información detallada para esta recolección.</p>;
                  }
                })()
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default List_Recoleccion;