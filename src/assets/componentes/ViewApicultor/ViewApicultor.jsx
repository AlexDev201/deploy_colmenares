import { useNavigate } from 'react-router-dom';
import imagen1 from 'src/img/apicultor_icon.png';
import imagen2 from 'src/img/apicultor_icon_3.png';
import imagen3 from 'src/img/apicultor_icon_2.png';
import { useEffect, useState } from 'react';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import Footer from '../Single_Components/Footer';
import Aside_Card from '../Single_Components/Aside';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import logo from 'src/img/Colmenares_del_eje_logo.png';


function ViewApicultor() {
  const [apicultores, setApicultores] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();
  const [selectedApicultorId, setSelectedApicultorId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [selectValues, setSelectValues] = useState({});
  const [modalAnimation, setModalAnimation] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);

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
      .apicultor-card {
        transition: all 0.3s ease;
        transform: translateZ(0);
        cursor: pointer;
      }
      .apicultor-card:hover {
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

  const apicultoresIniciales = [
    { id: 1, first_name: "Juan", last_name: "Pérez", state: "Active", imagen: imagen1 },
    { id: 2, first_name: "María", last_name: "Gómez", state: "Active", imagen: imagen2 },
    { id: 3, first_name: "Carlos", last_name: "Ramírez", state: "Inactive", imagen: imagen3 },
  ];

  const handleSelectChange = async (e, apicultorId) => {
    setSelectValues(prev => ({
      ...prev,
      [apicultorId]: e.target.value
    }));
    switch (e.target.value) {
      case 'editar':
        navigate(`/EditUser/${apicultorId}`, { state: { id: apicultorId } });
        break;
      case 'ver-detalles':
        setSelectedApicultorId(null);
        setTimeout(async () => {
          try {
            const accessToken = getCookie('token');
            const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/detail-beekeeper/${apicultorId}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });
            if (!response.ok) throw new Error('Error al cargar detalles');
            const data = await response.json();
            setSelectedApicultorId({ id: apicultorId, ...data });
            setShowPopup(true);
          } catch (error) {
            alert('Error al cargar detalles');
          }
        }, 10);
        break;
      default:
        break;
    }
  };

  const handleChangeState = async (apicultor) => {
    if (statusUpdating) return; 
    
    try {
      setStatusUpdating(true);
      const accessToken = getCookie('token');
      
      const newState = apicultor.state === 'Active' ? 'Deactivate' : 'Active';
      
      const response = await fetch(`https://colmenaresdeleje.onrender.com/beekeepers/edit-state-beekeeper/${apicultor.id}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state: newState }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar el estado');
      }
      
      const result = await response.json();
      
      // Actualizar la lista de apicultores con el nuevo estado
      setApicultores(prevApicultores => {
        // Si el nuevo estado es "Deactivate", eliminamos el apicultor de la vista
        if (newState === 'Deactivate') {
          return prevApicultores.filter(item => item.id !== apicultor.id);
        } else {
          // Si no, actualizamos su estado
          return prevApicultores.map(item => 
            item.id === apicultor.id ? { ...item, state: newState } : item
          );
        }
      });
      
      // Actualizar el apicultor seleccionado en el modal
      setSelectedApicultorId(prev => ({ ...prev, state: newState }));
      
      // Si desactivamos, cerramos el popup
      if (newState === 'Deactivate') {
        closePopup();
      }
      
      // Mostrar mensaje de éxito
      alert('Estado actualizado correctamente');
      
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setStatusUpdating(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const accessToken = getCookie('token');
        const response = await fetch('https://colmenaresdeleje.onrender.com/beekeepers/list-beekeepers/', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const result = await response.json();
        // Filtramos solo los apicultores activos
        const apicultoresActivos = result.filter(user => 
          user.role === 'beekeeper' && user.state === 'Active'
        );
        setApicultores(apicultoresActivos);
        setLoading(false);
      } catch (error) {
        setError(error);
        // Filtrar también los datos iniciales para mostrar solo los activos
        setApicultores(apicultoresIniciales.filter(user => user.state === 'Active'));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const closePopup = () => {
    if (selectedApicultorId && selectedApicultorId.id) {
      setSelectValues(prev => ({
        ...prev,
        [selectedApicultorId.id]: ''
      }));
    }
    
    setShowPopup(false);
    setTimeout(() => {
      setSelectedApicultorId(null);
    }, 400);
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
    statusBadge: {
      transition: 'background-color 0.3s ease',
    },
    modalContent: {
      transform: showPopup ? 'scale(1)' : 'scale(0.8)',
      transition: 'transform 0.3s ease',
    },
    profileImage: {
      transition: 'transform 0.3s ease',
    }
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  // Filtramos los apicultores según el término de búsqueda
  const filteredApicultores = apicultores.filter((apicultor) => {
    const fullName = `${apicultor.first_name} ${apicultor.last_name}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Admin_Nav_Bar />
      <div className="container-fluid flex-grow-1 py-3">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7 mb-4 mx-auto">
            {/* Campo de búsqueda */}
            <div className="card shadow-sm mb-4 mx-2 mx-md-3" style={{
              animation: 'fadeIn 0.5s ease-out forwards',
            }}>
              <div className="card-body">
                <div className="input-group">
                  <span className="input-group-text bg-warning-subtle border-warning-subtle">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-warning-subtle border-warning-subtle"
                    placeholder="Buscar apicultor por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              {apicultores.length > 0 ? (
                filteredApicultores.length > 0 ? (
                  filteredApicultores.map((apicultor, index) => (
                    <div 
                      key={apicultor.id} 
                      className="card shadow-lg border rounded p-3 mx-2 mx-md-3 apicultor-card"
                      style={{
                        animation: 'fadeIn 0.5s ease-out forwards',
                        animationDelay: `${0.1 + (index * 0.05)}s`,
                        opacity: 0
                      }}
                    >
                      <div className="row g-0 align-items-center">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0 text-center">
                          <img 
                            src={imagen1} 
                            alt={`Imagen de ${apicultor.first_name} ${apicultor.last_name}`} 
                            className="img-fluid rounded-circle" 
                            style={{ 
                              height: '150px', 
                              width: '150px', 
                              objectFit: 'cover', 
                              border: '3px solid gray',
                              transition: 'transform 0.3s ease'
                            }} 
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05) rotate(5deg)'} 
                            onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                          />
                        </div>
                        <div className="col-12 col-sm-5 text-center text-sm-start mb-3 mb-sm-0">
                          <h3 className="mb-1 ms-0 ms-sm-3">{apicultor.first_name} {apicultor.last_name}</h3>
                          <p className="mb-0 ms-0 ms-sm-3">
                            <span 
                              className="badge bg-success"
                              style={modalStyles.statusBadge}
                            >
                              Activo
                            </span>
                          </p>
                        </div>
                        <div className="col-12 col-sm-3 text-center">
                          <select 
                            className="form-select form-select-sm bg-warning-subtle border-warning-subtle"
                            onChange={(e) => handleSelectChange(e, apicultor.id)}
                            value={selectValues[apicultor.id] || ''}
                          >
                            <option value="">Seleccionar</option>
                            <option value="editar">Editar</option>
                            <option value="ver-detalles">Ver detalles</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div 
                    className="alert alert-info mx-2 mx-md-3" 
                    role="alert"
                    style={{
                      animation: 'fadeIn 0.5s ease-out forwards',
                    }}
                  >
                    No se encontraron apicultores con el nombre "{searchTerm}"
                  </div>
                )
              ) : (
                <div 
                  className="alert alert-warning mx-2 mx-md-3" 
                  role="alert"
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                  }}
                >
                  No hay apicultores activos registrados
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-3 d-flex justify-content-end pe-5 ml-4">
            <Aside_Card />
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Modal para ver detalles del apicultor */}
      <div 
        className={`modal fade ${showPopup ? 'show' : ''}`} 
        id="apicultorModal" 
        tabIndex="-1" 
        aria-labelledby="apicultorModalLabel" 
        aria-hidden="true"
        onClick={closePopup}
        style={{ 
          display: showPopup ? 'block' : 'none', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          ...modalStyles[modalAnimation]
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
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
              <button 
                type="button" 
                className="btn-close" 
                onClick={closePopup}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedApicultorId && (
                <div style={modalStyles.detailsAnimation}>
                  <h5 
                    className="modal-title text-center mb-4" 
                    id="apicultorModalLabel"
                    style={{
                      display: 'inline-block',
                      animation: 'fadeIn 0.5s ease-out forwards',
                      width: '100%'
                    }}
                  >
                    Información del apicultor
                  </h5>
                  <div className="row">
                    <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                      <img 
                        src={imagen1} 
                        alt={`Imagen de ${selectedApicultorId.first_name}`}
                        className="rounded-circle border border-3 border-secondary"
                        style={{ 
                          width: '150px', 
                          height: '150px', 
                          objectFit: 'cover',
                          animation: 'fadeIn 0.5s ease-out forwards',
                          transition: 'transform 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05) rotate(5deg)'} 
                        onMouseOut={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                      />
                      <div className="d-flex flex-column gap-2 mt-3">
                        <button 
                          className="btn btn-warning honey-button" 
                          onClick={() => navigate(`/EditUser/${selectedApicultorId.id}`, { state: { id: selectedApicultorId.id } })}
                          style={{
                            animation: 'fadeIn 0.5s ease-out forwards',
                            animationDelay: '0.1s',
                            opacity: 0
                          }}
                        >
                          Editar
                        </button>
                        <button 
                          className={`btn honey-button ${selectedApicultorId.state === 'Active' ? 'btn-danger' : 'btn-success'}`}
                          onClick={() => handleChangeState(selectedApicultorId)}
                          disabled={statusUpdating}
                          style={{
                            animation: 'fadeIn 0.5s ease-out forwards',
                            animationDelay: '0.2s',
                            opacity: 0
                          }}
                        >
                          {statusUpdating ? (
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          ) : null}
                          {selectedApicultorId.state === 'Active' ? 'Deshabilitar' : 'Habilitar'}
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-md-7">
                      {[
                        { label: "Nombres", value: selectedApicultorId.first_name },
                        { label: "Apellidos", value: selectedApicultorId.last_name },
                        { label: "Identificación", value: selectedApicultorId.identifications },
                        { label: "Teléfono", value: selectedApicultorId.phone },
                        { label: "Correo", value: selectedApicultorId.email },
                        { label: "Contacto de emergencia", value: selectedApicultorId.emergency_contact_name },
                        { label: "Teléfono de emergencia", value: selectedApicultorId.emergency_contact_phone },
                        { label: "Fecha de nacimiento", value: selectedApicultorId.birth_date },
                        { label: "Fecha de asignación", value: selectedApicultorId.assignment_date }
                      ].map((item, index) => (
                        <p 
                          key={index}
                          style={{
                            animation: 'fadeIn 0.5s ease-out forwards',
                            animationDelay: `${0.1 + (index * 0.05)}s`,
                            opacity: 0,
                            transform: 'translateY(10px)'
                          }}
                        >
                          <strong>{item.label}:</strong> {item.value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default ViewApicultor;