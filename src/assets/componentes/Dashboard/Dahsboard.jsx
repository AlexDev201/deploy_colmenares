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
  const [modalAnimation, setModalAnimation] = useState('');
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [showFullHistory, setShowFullHistory] = useState(false);
  const [collections, setCollections] = useState({});
  const [monitorings, setMonitorings] = useState({});
  const [expandedColmena, setExpandedColmena] = useState(null);

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
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [role, token]);

  useEffect(() => {
    if (showFullHistory && data) {
      const fetchHistory = async () => {
        const newCollections = {};
        const newMonitorings = {};
        for (const colmena of data) {
          try {
            const collectionsResponse = await fetch(
              `https://colmenaresdeleje.onrender.com/beehive/list-collections/${colmena.id}/`,
              {
                headers: { 'Authorization': `Bearer ${token}` },
              }
            );
            if (collectionsResponse.ok) {
              newCollections[colmena.id] = await collectionsResponse.json();
            }

            const monitoringsResponse = await fetch(
              `https://colmenaresdeleje.onrender.com/beehive/list-monitorings/${colmena.id}/`,
              {
                headers: { 'Authorization': `Bearer ${token}` },
              }
            );
            if (monitoringsResponse.ok) {
              newMonitorings[colmena.id] = await monitoringsResponse.json();
            }
          } catch (err) {
            console.error(`Error fetching history for colmena ${colmena.id}:`, err);
          }
        }
        setCollections(newCollections);
        setMonitorings(newMonitorings);
      };
      fetchHistory();
    }
  }, [showFullHistory, data, token]);

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

  const closePopup = () => {
    setShowPopup(false);
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
      const nuevoEstado = colmenaActual.status === 'Active' ? 'Deactivate' : 'Active';

      const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/edit-state-hive/${colmenaId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          status: nuevoEstado,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar el estado');
      }

      setData(prevData =>
        prevData.map(colmena =>
          colmena.id === colmenaId ? { ...colmena, status: nuevoEstado } : colmena
        )
      );

      alert(`Colmena ${nuevoEstado === 'Active' ? 'habilitada' : 'deshabilitada'} con éxito`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setStatusUpdating(false);
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
      .bee-card .col-sm-5 {
        text-align: center;
        margin-top: 10px;
      }
    }
  `;
  document.head.appendChild(styleElement);

  const filteredData = showFullHistory ? data : (data ? data.filter(colmena => colmena.status === 'Active') : []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}

      <div className="container-fluid flex-grow-1 py-3">
        {role === 'admin' && (
          <div className="text-center mb-3">
            <button
              className={`btn ${showFullHistory ? 'btn-success' : 'btn-warning'} honey-button`}
              onClick={() => setShowFullHistory(!showFullHistory)}
            >
              {showFullHistory ? 'Mostrar Solo Activas' : 'Ver Historial Completo'}
            </button>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7 mb-4 mx-auto">
            <div className="d-flex flex-column gap-3">
              {error ? (
                <p className="text-danger text-center">Error: {error}</p>
              ) : !data ? (
                <p className="text-center">Cargando colmenas...</p>
              ) : filteredData.length === 0 ? (
                <p className="text-center">No hay colmenas registradas.</p>
              ) : (
                filteredData.map((colmena, index) => (
                  <div
                    key={colmena.id}
                    className="card rounded p-3 mx-2 mx-md-3 bee-card position-relative"
                    style={modalStyles.hiveCard}
                  >
                    <div className="row g-0 align-items-center">
                      <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                        <img
                          src={imagenes[index % imagenes.length]}
                          alt="Imagen de la colmena"
                          className="img-fluid rounded"
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                          }}
                          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                        />
                      </div>

                      <div className="col-12 col-sm-8 text-center text-sm-start">
                        <h3 className="mb-1 ms-0 ms-sm-3">Numero de colmena: {colmena.id}</h3>
                        <p className="mb-0 ms-0 ms-sm-3">Ubicación: {colmena.location}</p>
                        <p className="mb-0 ms-0 ms-sm-3">
                          <span
                            className={`badge ${colmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}
                            style={modalStyles.statusBadge}
                          >
                            {colmena.status === 'Active' ? 'Activa' : 'Inactiva'}
                          </span>
                        </p>
                        <p className="mb-0 ms-0 ms-sm-3">Apicultor: {colmena.beekeeper_id.first_name} {colmena.beekeeper_id.last_name}</p>
                        <p className="mb-0 ms-0 ms-sm-3">Cuadros de cría abierta: {colmena.open_brood_frames}</p>
                        <p className="mb-0 ms-0 ms-sm-3">Cuadros de cría operculada: {colmena.capped_brood_frames}</p>
                        <p className="mb-0 ms-0 ms-sm-3">Cuadros de comida: {colmena.food_frames}</p>
                        <p className="mb-0 ms-0 ms-sm-3">Presencia de reina: {colmena.queen_presence ? 'Sí' : 'No'}</p>

                        {showFullHistory && (
                          <>
                            <button
                              className="btn btn-link mt-2 ms-0 ms-sm-3"
                              onClick={() => setExpandedColmena(expandedColmena === colmena.id ? null : colmena.id)}
                            >
                              {expandedColmena === colmena.id ? 'Ocultar Historial' : 'Ver Historial'}
                            </button>
                            {expandedColmena === colmena.id && (
                              <div className="mt-2 ms-0 ms-sm-3">
                                <h5>Recolecciones</h5>
                                {collections[colmena.id]?.length > 0 ? (
                                  <ul>
                                    {collections[colmena.id].map((collection, idx) => (
                                      <li key={idx}>
                                        Fecha: {new Date(collection.date).toLocaleDateString()} - Cantidad: {collection.amount}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>No hay recolecciones registradas.</p>
                                )}

                                <h5>Monitoreos</h5>
                                {monitorings[colmena.id]?.length > 0 ? (
                                  <ul>
                                    {monitorings[colmena.id].map((monitoring, idx) => (
                                      <li key={idx}>
                                        Fecha: {new Date(monitoring.date).toLocaleDateString()} - Observaciones: {monitoring.observations}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>No hay monitoreos registrados.</p>
                                )}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
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
                                className={`btn honey-button ${selectedColmena.status === 'Active' ? 'btn-danger' : 'btn-success'}`}
                                onClick={() => handleChangeHiveState(selectedColmena.id)}
                                disabled={statusUpdating}
                                style={{
                                  animation: 'fadeIn 0.5s ease-out forwards',
                                  animationDelay: '0.2s',
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
                                {selectedColmena.status === 'Active' ? 'Deshabilitar' : 'Habilitar'}
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-md-7">
                            {[
                              { label: "Estado", value: <span className={`badge ${selectedColmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{selectedColmena.status === 'Active' ? 'Activa' : 'Inactiva'}</span> },
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