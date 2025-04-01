import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../Single_Components/NavBar';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imagen1 from 'src/img/abejitas.jpeg';
import imagen2 from 'src/img/imagen_ejemplo.jpg';
import imagen3 from 'src/img/images.jpeg';
import jsPDF from 'jspdf';

function HistoryCard({ colmenaId, token, historyData }) {
  // Ya recibimos historyData como prop en lugar de hacer la petición aquí
  const { monitorings, collections } = historyData || { monitorings: [], collections: [] };
  
  return (
    <div className="card rounded p-3 mx-2 mx-md-3 mt-3" style={{ 
      border: '1px solid black', 
      boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
      backgroundColor: '#fff8e6' // Fondo amarillo claro para relacionarlo con la miel
    }}>
      <h4 className="text-center mb-3">Historial de Colmena {colmenaId}</h4>
      
      <div className="row">
        {/* Columna de Monitoreos */}
        <div className="col-12 col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header bg-warning bg-opacity-75">
              <h5 className="mb-0 text-center">
                <i className="bi bi-clipboard-check me-2"></i>
                Monitoreos ({monitorings.length})
              </h5>
            </div>
            <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {monitorings.length === 0 ? (
                <p className="text-center text-muted py-3">No hay monitoreos registrados.</p>
              ) : (
                <div className="list-group">
                  {monitorings.map((mon, index) => (
                    <div key={index} className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">
                          <i className="bi bi-calendar-date me-2"></i>
                          {new Date(mon.date).toLocaleDateString()}
                        </h6>
                      </div>
                      <p className="mb-1">
                        <strong>Observaciones:</strong> {mon.observations || 'Sin observaciones'}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Columna de Recolecciones */}
        <div className="col-12 col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header bg-warning bg-opacity-75">
              <h5 className="mb-0 text-center">
                <i className="bi bi-bucket me-2"></i>
                Recolecciones ({collections.length})
              </h5>
            </div>
            <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {collections.length === 0 ? (
                <p className="text-center text-muted py-3">No hay recolecciones registradas.</p>
              ) : (
                <div className="list-group">
                  {collections.map((col, index) => (
                    <div key={index} className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">
                          <i className="bi bi-calendar-date me-2"></i>
                          {new Date(col.date).toLocaleDateString()}
                        </h6>
                        <span className="badge bg-warning text-dark">
                          {col.quantity} kg
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Resumen Estadístico */}
        <div className="col-12 mt-2">
          <div className="alert alert-warning mb-0">
            <div className="row text-center">
              <div className="col-6">
                <strong>Total Monitoreos:</strong> {monitorings.length}
              </div>
              <div className="col-6">
                <strong>Total Recolectado:</strong> {collections.reduce((sum, item) => sum + item.quantity, 0)} kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Historial() {
  const [data, setData] = useState(null);
  const [historyData, setHistoryData] = useState({});  // Objeto para almacenar los datos de historial por colmenaId
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const imagenes = [imagen1, imagen2, imagen3];

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endpoint = role === 'admin'
          ? 'https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/'
          : 'https://colmenaresdeleje.onrender.com/beehive/list-hives/';
        const response = await fetch(endpoint, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        const result = await response.json();
        setData(result);
        
        // Después de obtener las colmenas, hacemos las peticiones de monitoreo y recolección para cada una
        const historyDataObj = {};
        
        // Hacemos todas las peticiones en paralelo para optimizar
        const promises = [];
        for (const colmena of result) {
          promises.push(
            Promise.all([
              fetch(`https://colmenaresdeleje.onrender.com/beehive/monitoring/${colmena.id}/`, {
                headers: { 'Authorization': `Bearer ${token}` },
              }),
              fetch(`https://colmenaresdeleje.onrender.com/beehive/collection/${colmena.id}/`, {
                headers: { 'Authorization': `Bearer ${token}` },
              })
            ]).then(async ([monitoringResponse, collectionResponse]) => {
              if (!monitoringResponse.ok || !collectionResponse.ok) {
                throw new Error(`Error al cargar el historial para la colmena ${colmena.id}`);
              }
              
              const monitorings = await monitoringResponse.json();
              const collections = await collectionResponse.json();
              
              // Ordenamos por fecha de más reciente a más antigua
              const sortedMonitorings = monitorings.sort((a, b) => new Date(b.date) - new Date(a.date));
              const sortedCollections = collections.sort((a, b) => new Date(b.date) - new Date(a.date));
              
              historyDataObj[colmena.id] = {
                monitorings: sortedMonitorings,
                collections: sortedCollections
              };
            })
          );
        }
        
        // Esperamos a que todas las peticiones terminen
        await Promise.all(promises);
        setHistoryData(historyDataObj);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    if (token) {
      fetchData();
    }
  }, [role, token]);

  const generatePDF = async () => {
    const doc = new jsPDF();
    let yOffset = 10;

    doc.setFontSize(16);
    doc.text('Reporte Completo de Colmenas', 10, yOffset);
    yOffset += 10;

    for (const colmena of data) {
      doc.setFontSize(12);
      doc.text(`Colmena ${colmena.id}`, 10, yOffset);
      yOffset += 5;

      doc.setFontSize(10);
      doc.text(`Ubicación: ${colmena.location}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Estado: ${colmena.status}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Apicultor: ${colmena.beekeeper_id.first_name} ${colmena.beekeeper_id.last_name}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Cuadros cría abierta: ${colmena.open_brood_frames}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Cuadros cría operculada: ${colmena.capped_brood_frames}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Cuadros de comida: ${colmena.food_frames}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Presencia reina: ${colmena.queen_presence ? 'Sí' : 'No'}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Color reina: ${colmena.queen_color}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Origen reina: ${colmena.origin}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Observaciones: ${colmena.observations}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Fecha de creación: ${new Date(colmena.registration_date).toISOString().split('T')[0]}`, 10, yOffset);
      yOffset += 10;

      // Usamos los datos ya cargados para el PDF
      const colmenaHistory = historyData[colmena.id] || { monitorings: [], collections: [] };
      
      doc.text('Historial:', 10, yOffset);
      yOffset += 5;

      doc.text('Monitoreos:', 10, yOffset);
      yOffset += 5;
      colmenaHistory.monitorings.forEach(mon => {
        doc.text(`- ${new Date(mon.date).toLocaleDateString()}: ${mon.observations || 'Sin observaciones'}`, 10, yOffset);
        yOffset += 5;
      });

      doc.text('Recolecciones:', 10, yOffset);
      yOffset += 5;
      colmenaHistory.collections.forEach(col => {
        doc.text(`- ${new Date(col.date).toLocaleDateString()}: ${col.quantity} kg`, 10, yOffset);
        yOffset += 5;
      });

      if (yOffset > 280) {
        doc.addPage();
        yOffset = 10;
      }
    }

    doc.save('Reporte_Historial_Colmenas.pdf');
  };

  const cardStyles = {
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
    .bee-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; transform: translateY(-5px) !important; }
    @media (max-width: 576px) { .bee-card .row { flex-direction: column; align-items: stretch; } .bee-card img { max-height: 150px; margin: 0 auto; } .bee-card .col-sm-7 { text-align: center; margin-top: 10px; } }
  `;
  document.head.appendChild(styleElement);

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <div className="container-fluid flex-grow-1 py-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="text-center mb-4">Historial Completo de Colmenas</h2>
            {loading ? (
              <div className="text-center my-5">
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2">Cargando datos de colmenas...</p>
              </div>
            ) : error ? (
              <div className="alert alert-danger" role="alert">
                Error: {error}
              </div>
            ) : !data || data.length === 0 ? (
              <p className="text-center">No hay colmenas registradas.</p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {data.map((colmena, index) => (
                  <div key={colmena.id}>
                    <div className="card rounded p-3 mx-2 mx-md-3 bee-card position-relative" style={cardStyles.hiveCard}>
                      <div className="row g-0 align-items-center">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                          <img
                            src={imagenes[index % imagenes.length]}
                            alt="Imagen de la colmena"
                            className="img-fluid rounded"
                            style={{ width: '100%', height: '150px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                          />
                        </div>
                        <div className="col-12 col-sm-7 text-center text-sm-start mb-3 mb-sm-0">
                          <h3 className="mb-1 ms-0 ms-sm-3">Numero de colmena: {colmena.id}</h3>
                          <p className="mb-0 ms-0 ms-sm-3">Ubicación: {colmena.location}</p>
                          <p className="mb-0 ms-0 ms-sm-3">
                            <strong>Estado:</strong> <span className={`badge ${colmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{colmena.status === 'Active' ? 'Activa' : 'Inactiva'}</span>
                          </p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Apicultor asignado:</strong> {colmena.beekeeper_id.first_name} {colmena.beekeeper_id.last_name}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros cría abierta:</strong> {colmena.open_brood_frames}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros cría operculada:</strong> {colmena.capped_brood_frames}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros de comida:</strong> {colmena.food_frames}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Presencia reina:</strong> {colmena.queen_presence ? 'Sí' : 'No'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Color reina:</strong> {colmena.queen_color}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Origen reina:</strong> {colmena.origin}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Observaciones:</strong> {colmena.observations}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Grados centígrados:</strong> {colmena.id_weather_conditions?.temp_c}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Grados Fahrenheit:</strong> {colmena.id_weather_conditions?.temp_f}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Condiciones:</strong> {colmena.id_weather_conditions?.text}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Velocidad del viento:</strong> {colmena.id_weather_conditions?.wind_kph} kph</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Presión:</strong> {colmena.id_weather_conditions?.pressure_mb} mb</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Índices de humedad:</strong> {colmena.id_weather_conditions?.humidity_indices}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Fecha de creación:</strong> {new Date(colmena.registration_date).toISOString().split('T')[0]}</p>
                        </div>
                      </div>
                    </div>
                    {/* Pasamos los datos de historial ya cargados al componente HistoryCard */}
                    <HistoryCard 
                      colmenaId={colmena.id} 
                      token={token} 
                      historyData={historyData[colmena.id]}
                    />
                  </div>
                ))}
                <button 
                  className="btn btn-primary mt-3 mx-auto d-block" 
                  onClick={generatePDF} 
                  disabled={loading || error || !data}
                >
                  Generar PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Historial;