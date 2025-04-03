import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import Footer from '../Single_Components/Footer';
import Aside_Card from '../Single_Components/Aside';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from 'src/img/Colmenares_del_eje_logo.png';

// Imágenes placeholders
import imagen1 from 'src/img/abejitas.jpeg';
import imagen2 from 'src/img/imagen_ejemplo.jpg';
import imagen3 from 'src/img/images.jpeg';

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedColmenaId, setSelectedColmenaId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [selectValues, setSelectValues] = useState({});
  const [modalAnimation, setModalAnimation] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const role = getCookie('role');
  const token = getCookie('token');
  const imagenes = [imagen1, imagen2, imagen3];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = role === 'admin'
          ? 'https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/'
          : 'https://colmenaresdeleje.onrender.com/beehive/list-hives/';
        const response = await fetch(endpoint, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const result = await response.json();
        const activeBees = result.filter(colmena => colmena.status === 'Active');
        setData(activeBees);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [role, token]);

  useEffect(() => {
    if (showPopup) {
      setModalAnimation('animateModalIn');
      setTimeout(() => {
        setDetailsVisible(true);
      }, 300);
    } else {
      setModalAnimation('animateModalOut');
      setDetailsVisible(false);
    }
  }, [showPopup]);

  const handleSelectChange = (e, colmenaId) => {
    setSelectValues({
      ...selectValues,
      [colmenaId]: e.target.value,
    });
    switch (e.target.value) {
      case 'editar':
        navigate(`/EditColmena/${colmenaId}`);
        break;
      case 'monitoreo':
        navigate(`/Monitoreo/${colmenaId}`);
        break;
      case 'recoleccion':
        navigate(`/Recoleccion/${colmenaId}`);
        break;
      case 'lista_monitoreo':
        navigate('/List_Monitoreo');
        break;
      case 'lista_recoleccion':
        navigate('/List_Recoleccion');
        break;
      case 'visualizar-detalles':
        setSelectedColmenaId(null);
        setTimeout(() => {
          setSelectedColmenaId(colmenaId);
          setShowPopup(true);
        }, 10);
        break;
      default:
        break;
    }
  };

  const closePopup = () => {
    if (selectedColmenaId) {
      setSelectValues({
        ...selectValues,
        [selectedColmenaId]: '',
      });
    }
    setShowPopup(false);
    setShowQR(false);
    setQrData(null);
    setTimeout(() => {
      setSelectedColmenaId(null);
    }, 400);
  };

  const handleChangeHiveState = async (colmenaId) => {
    if (statusUpdating) return;

    try {
      setStatusUpdating(true);
      const accessToken = token;
      const colmenaActual = data.find(c => c.id === colmenaId);
      if (!colmenaActual) throw new Error('Colmena no encontrada');
      const nuevoEstado = !colmenaActual.status;

      const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-state-hive/${colmenaId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          status: nuevoEstado ? 'Active' : 'Deactivate',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar el estado');
      }

      if (!nuevoEstado) {
        setData(prevData => prevData.filter(colmena => colmena.id !== colmenaId));
        if (showPopup && selectedColmenaId === colmenaId) {
          closePopup();
        }
      } else {
        setData(prevData =>
          prevData.map(colmena =>
            colmena.id === colmenaId ? { ...colmena, status: nuevoEstado } : colmena
          )
        );
      }

      alert(`Colmena ${nuevoEstado ? 'habilitada' : 'deshabilitada'} con éxito`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setStatusUpdating(false);
    }
  };

  const handleQRAction = async (colmenaId, action = 'download') => {
    try {
      const accessToken = token;
      const endpoint = role === 'admin'
        ? 'https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/'
        : 'https://colmenaresdeleje.onrender.com/beehive/list-hives/';

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los detalles de la colmena');
      }

      const hives = await response.json();
      const selectedHive = hives.find(hive => hive.id === colmenaId);

      if (!selectedHive || !selectedHive.qr_code) {
        throw new Error('No se encontró el código QR para esta colmena');
      }

      const qrBase64 = selectedHive.qr_code;

      if (action === 'view') {
        setQrData(qrBase64);
        setShowQR(!showQR);
      } else if (action === 'download') {
        const link = document.createElement('a');
        link.href = `data:image/png;base64,${qrBase64}`;
        link.download = `qr_hive_${colmenaId}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert('Código QR descargado exitosamente');
      }
    } catch (error) {
      alert(`Error al procesar el QR: ${error.message}`);
    }
  };

  const modalStyles = {
    animateModalIn: { animation: 'fadeIn 0.3s ease-out forwards' },
    animateModalOut: { animation: 'fadeOut 0.3s ease-in forwards' },
    detailsAnimation: {
      opacity: detailsVisible ? 1 : 0,
      transform: detailsVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    },
    qrAnimation: {
      opacity: showQR ? 1 : 0,
      maxHeight: showQR ? '300px' : '0px',
      transition: 'opacity 0.4s ease, max-height 0.4s ease',
      overflow: 'hidden',
    },
    statusBadge: { transition: 'background-color 0.3s ease' },
    modalContent: {
      transform: showPopup ? 'scale(1)' : 'scale(0.8)',
      transition: 'transform 0.3s ease',
    },
    hiveCard: {
      transition: 'all 0.3s ease',
      transform: 'translateZ(0)',
      cursor: 'pointer',
      border: '1px solid black',
      boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
    },
    hiveCardHover: {
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transform: 'translateY(-5px)',
    },
  };

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
    .bee-card:hover {
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
    @media (max-width: 576px) {
      .bee-card .row {
        flex-direction: column;
        align-items: stretch;
      }
      .bee-card img {
        max-height: 150px;
        margin: 0 auto;
      }
      .bee-card .col-sm-5,
      .bee-card .col-sm-3 {
        text-align: center;
        margin-top: 10px;
      }
      .form-select {
        width: 100%;
        margin: 0 auto;
      }
    }
  `;
  document.head.appendChild(styleElement);

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}

      <div className="container-fluid flex-grow-1 py-3">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7 mb-4 mx-auto">
            <div className="d-flex flex-column gap-3">
              {error ? (
                <p className="text-danger text-center">Error: {error}</p>
              ) : !data ? (
                <p className="text-center">Cargando colmenas...</p>
              ) : data.length === 0 ? (
                <p className="text-center">No hay colmenas registradas.</p>
              ) : (
                data.map((colmena, index) => (
                  <div
                    key={colmena.id}
                    className="card rounded p-3 mx-2 mx-md-3 bee-card position-relative"
                    style={modalStyles.hiveCard}
                  >
                    <div className="row g-0 align-items-center">
                      <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                        <div
                          id={`image-flip-${colmena.id}`}
                          style={{
                            transition: 'transform 0.6s',
                            transformStyle: 'preserve-3d',
                            position: 'relative',
                            width: '100%',
                            height: '150px',
                          }}
                        >
                          <button
                            className="btn btn-sm btn-warning position-absolute"
                            style={{
                              top: '5px',
                              left: '5px',
                              zIndex: 10,
                              padding: '3px 8px',
                              fontSize: '0.8rem',
                              opacity: 0.9,
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const imageContainer = document.getElementById(`image-flip-${colmena.id}`);
                              if (imageContainer) {
                                imageContainer.style.transform =
                                  imageContainer.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
                              }
                            }}
                          >
                            <i className="bi bi-arrow-repeat"></i>
                          </button>

                          <div
                            style={{
                              backfaceVisibility: 'hidden',
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <img
                              src={imagenes[index % imagenes.length]}
                              alt="Imagen de la colmena"
                              className="img-fluid rounded"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                              }}
                              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                            />
                          </div>

                          <div
                            style={{
                              backfaceVisibility: 'hidden',
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              transform: 'rotateY(180deg)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#fff',
                            }}
                          >
                            {colmena.qr_code ? (
                              <img
                                src={`data:image/png;base64,${colmena.qr_code}`}
                                alt={`QR Code for hive ${colmena.id}`}
                                style={{
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            ) : (
                              <p style={{ textAlign: 'center' }}>No QR disponible</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-sm-5 text-center text-sm-start mb-3 mb-sm-0">
                        <h3 className="mb-1 ms-0 ms-sm-3">Numero de colmena: {colmena.id}</h3>
                        <p className="mb-0 ms-0 ms-sm-3">Ubicacion: {colmena.location}</p>
                        <p className="mb-0 ms-0 ms-sm-3">
                          <span
                            className={`badge ${colmena.status ? 'bg-success' : 'bg-danger'}`}
                            style={modalStyles.statusBadge}
                          >
                            {colmena.status ? 'Activa' : 'Inactiva'}
                          </span>
                        </p>
                      </div>
                      <div className="col-12 col-sm-3 text-center">
                        <select
                          className="form-select form-select-sm bg-warning-subtle border-warning-subtle"
                          onChange={(e) => handleSelectChange(e, colmena.id)}
                          value={selectValues[colmena.id] || ''}
                        >
                          <option value="">Seleccionar</option>
                          <option value="editar">Editar</option>
                          <option value="recoleccion">Recolección</option>
                          <option value="monitoreo">Monitoreo</option>
                          <option value="visualizar-detalles">Visualizar Detalles</option>
                          <option value="lista_monitoreo">Lista de monitoreos</option>
                          <option value="lista_recoleccion">Lista de recolecciones</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {role === 'admin' && (
              <button
                className="btn btn-primary mt-3 mx-auto d-block"
                onClick={() => navigate('/Historial')}
              >
                Ver Historial Completo
              </button>
            )}
          </div>

          <div className="col-12 col-lg-4 col-xl-3">
            <Aside_Card />
          </div>
        </div>
      </div>

      <Footer />

      <div
        className={`modal fade ${showPopup ? 'show' : ''}`}
        id="colmenaModal"
        tabIndex="-1"
        aria-labelledby="colmenaModalLabel"
        aria-hidden="true"
        style={{
          display: showPopup ? 'block' : 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          ...modalStyles[modalAnimation],
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={modalStyles.modalContent}>
            <div className="modal-header border-0 pb-0">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: '35px',
                  animation: showPopup ? 'spin 1s ease-in-out' : 'none',
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
              {selectedColmenaId && data && (
                (() => {
                  const selectedColmena = data.find(c => c.id === selectedColmenaId);
                  if (selectedColmena) {
                    return (
                      <div style={modalStyles.detailsAnimation}>
                        <h5 className="modal-title text-center mb-4" id="colmenaModalLabel">
                          <span
                            style={{
                              display: 'inline-block',
                              animation: 'fadeIn 0.5s ease-out forwards',
                            }}
                          >
                            Información de la colmena
                          </span>
                        </h5>
                        <div className="row">
                          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                            <img
                              src={imagen1}
                              alt="Imagen de colmena"
                              className="rounded-circle border border-3 border-secondary"
                              style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                animation: 'fadeIn 0.5s ease-out forwards',
                                transition: 'transform 0.3s ease',
                              }}
                              onMouseOver={(e) => (e.target.style.transform = 'scale(1.05) rotate(5deg)')}
                              onMouseOut={(e) => (e.target.style.transform = 'scale(1) rotate(0deg)')}
                            />
                            <div className="d-flex flex-column gap-2 mt-3">
                              <button
                                className="btn btn-warning honey-button"
                                onClick={() => navigate(`/EditColmena/${selectedColmena.id}`)}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.1s',
                                  opacity: 0,
                                }}
                              >
                                Editar
                              </button>
                              <button
                                className="btn btn-warning honey-button"
                                onClick={() => handleQRAction(selectedColmena.id, 'download')}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.2s',
                                  opacity: 0,
                                }}
                              >
                                Descargar QR
                              </button>
                              <button
                                className="btn btn-warning honey-button"
                                onClick={() => handleQRAction(selectedColmena.id, 'view')}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.3s',
                                  opacity: 0,
                                }}
                              >
                                {showQR ? 'Ocultar QR' : 'Ver QR'}
                              </button>
                              <button
                                className={`btn honey-button ${selectedColmena.status ? 'btn-danger' : 'btn-success'}`}
                                onClick={() => handleChangeHiveState(selectedColmena.id)}
                                disabled={statusUpdating}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.4s',
                                  opacity: 0,
                                }}
                              >
                                {statusUpdating ? (
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : null}
                                {selectedColmena.status ? 'Deshabilitar' : 'Habilitar'}
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-md-7">
                            <div style={modalStyles.qrAnimation}>
                              {qrData && (
                                <div className="mb-3 text-center">
                                  <h6>Código QR:</h6>
                                  <img
                                    src={`data:image/png;base64,${qrData}`}
                                    alt="Código QR de la colmena"
                                    style={{
                                      maxWidth: '200px',
                                      maxHeight: '200px',
                                    }}
                                  />
                                </div>
                              )}
                            </div>

                            {[
                              { label: "Estado", value: <span className={`badge ${selectedColmena.status ? 'bg-success' : 'bg-danger'}`}>{selectedColmena.status ? 'Activa' : 'Inactiva'}</span> },
                              { label: "Apicultor asignado", value: `${selectedColmena.beekeeper_id.first_name} ${selectedColmena.beekeeper_id.last_name}` },
                              { label: "Cantidad cuadros cría abierta", value: selectedColmena.open_brood_frames },
                              { label: "Cantidad cuadros cría operculada", value: selectedColmena.capped_brood_frames },
                              { label: "Cuadros de comida", value: selectedColmena.food_frames },
                              { label: "Presencia reina", value: selectedColmena.queen_presence ? 'Sí' : 'No' },
                              { label: "Color reina", value: selectedColmena.queen_color },
                              { label: "Origen reina", value: selectedColmena.origin },
                              { label: "Reportes generales", value: selectedColmena.observations },
                              { label: "Grados centigrados", value: selectedColmena.id_weather_conditions.temp_c },
                              { label: "Grados farenheit", value: selectedColmena.id_weather_conditions.temp_f },
                              { label: "Condiciones", value: selectedColmena.id_weather_conditions.text },
                              { label: "Velocidad del viento", value: selectedColmena.id_weather_conditions.wind_kph },
                              { label: "Presion", value: selectedColmena.id_weather_conditions.pressure_mb },
                              { label: "Ubicacion", value: selectedColmena.location },
                              { label: "Indices de humedad", value: selectedColmena.id_weather_conditions.humidity_indices },
                              { label: "Fecha de creacion", value: new Date(selectedColmena.registration_date).toISOString().split('T')[0] },
                            ].map((item, index) => (
                              <p
                                key={index}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: `${0.1 + index * 0.05}s`,
                                  opacity: 0,
                                  transform: 'translateY(10px)',
                                }}
                              >
                                <strong>{item.label}:</strong> {item.value}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return <p className="text-center">No se encontró información detallada para esta colmena.</p>;
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

export default Dashboard;