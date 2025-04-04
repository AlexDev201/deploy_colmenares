import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import NavBar from '../Single_Components/NavBar';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import Footer from '../Single_Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imagen1 from 'src/img/abejitas.jpeg';
import imagen2 from 'src/img/imagen_ejemplo.jpg';
import imagen3 from 'src/img/images.jpeg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function HistoryCard({ colmenaId, monitorings, harvestings }) {
  const colmenaIdStr = String(colmenaId);

  const filteredMonitorings = monitorings.filter(mon => {
    const hiveId = mon.hive_id?.id ?? mon.hive_id;
    return String(hiveId) === colmenaIdStr;
  });

  const filteredHarvestings = harvestings.filter(harv => {
    const hiveId = harv.hive_id?.id ?? harv.hive_id;
    return String(hiveId) === colmenaIdStr;
  });

  return (
    <div className="card rounded p-3 mx-2 mx-md-3 mt-3" style={{ border: '1px solid black', boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}>
      <h4 className="text-center mb-3">Historial de Colmena {colmenaId}</h4>
      
      <h5>Monitoreos</h5>
      {filteredMonitorings.length === 0 ? (
        <p>No hay monitoreos registrados para esta colmena.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-warning">
              <tr>
                <th>Fecha</th>
                <th>Observaciones reina</th>
                <th>Observaciones alimento</th>
                <th>Observaciones generales</th>
              </tr>
            </thead>
            <tbody>
              {filteredMonitorings.map((mon) => (
                <tr key={mon.id}>
                  <td>{new Date(mon.monitoring_date).toLocaleDateString()}</td>
                  <td>{mon.queen_observations || 'N/A'}</td>
                  <td>{mon.food_observations || 'N/A'}</td>
                  <td>{mon.general_observations || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <h5 className="mt-4">Recolecciones</h5>
      {filteredHarvestings.length === 0 ? (
        <p>No hay recolecciones registradas para esta colmena.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-warning">
              <tr>
                <th>Fecha</th>
                <th>Producción de miel (kg)</th>
                <th>Producción de polen (kg)</th>
              </tr>
            </thead>
            <tbody>
              {filteredHarvestings.map((harv) => (
                <tr key={harv.id}>
                  <td>{new Date(harv.harvest_date).toLocaleDateString()}</td>
                  <td>{harv.honey_production || 0}</td>
                  <td>{harv.pollen_production || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Historial() {
  const [data, setData] = useState([]);
  const [monitorings, setMonitorings] = useState([]);
  const [harvestings, setHarvestings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const imagenes = [imagen1, imagen2, imagen3];
  const contentRef = useRef(null);

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
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const hivesEndpoint = role === 'admin'
          ? 'https://colmenaresdeleje.onrender.com/beehive/list-hives-admin/'
          : 'https://colmenaresdeleje.onrender.com/beehive/list-hives/';
        const monitoringsEndpoint = 'https://colmenaresdeleje.onrender.com/monitoring/list-beehive-monitoring/';
        const harvestingsEndpoint = 'https://colmenaresdeleje.onrender.com/harvesting/list-hive-harvesting/';

        const [hivesResponse, monitoringsResponse, harvestingsResponse] = await Promise.all([
          fetch(hivesEndpoint, { headers: { 'Authorization': `Bearer ${token}` } }),
          fetch(monitoringsEndpoint, { headers: { 'Authorization': `Bearer ${token}` } }),
          fetch(harvestingsEndpoint, { headers: { 'Authorization': `Bearer ${token}` } })
        ]);

        if (!hivesResponse.ok) throw new Error('Error al cargar colmenas');
        if (!monitoringsResponse.ok) throw new Error('Error al cargar monitoreos');
        if (!harvestingsResponse.ok) throw new Error('Error al cargar recolecciones');

        const hivesData = await hivesResponse.json();
        const monitoringsData = await monitoringsResponse.json();
        const harvestingsData = await harvestingsResponse.json();

        setData(Array.isArray(hivesData) ? hivesData : []);
        setMonitorings(Array.isArray(monitoringsData) ? monitoringsData : []);
        setHarvestings(Array.isArray(harvestingsData) ? harvestingsData : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchAllData();
    else setError('No se encontró el token de autenticación');
  }, [role, token]);

  const generatePDF = async () => {
    const element = contentRef.current;
    if (!element) return;
  
    try {
      const margin = 10;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const options = {
        scale: 1,
        useCORS: true,
        logging: false,
      };
  
      const clonedElement = element.cloneNode(true);
      document.body.appendChild(clonedElement);
      clonedElement.style.width = '210mm';
  
      const sections = clonedElement.querySelectorAll('.card');
      
      for (let i = 0; i < sections.length; i++) {
        const canvas = await html2canvas(sections[i], options);
        const imgData = canvas.toDataURL('image/jpeg', 0.7);
        
        const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        if (i !== 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', margin, margin, pdfWidth, pdfHeight);
      }
  
      document.body.removeChild(clonedElement);
      pdf.save('Reporte_Historial_Colmenas.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error al generar el PDF. Por favor, inténtelo de nuevo.');
    }
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

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <div className="container-fluid flex-grow-1 py-3" ref={contentRef}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <h2 className="text-center mb-4">Historial Completo de Colmenas</h2>
            <div className="d-flex flex-column gap-3">
              {error ? (
                <p className="text-danger text-center">Error: {error}</p>
              ) : loading ? (
                <p className="text-center">Cargando datos...</p>
              ) : data.length === 0 ? (
                <p className="text-center">No hay colmenas registradas.</p>
              ) : (
                data.map((colmena, index) => (
                  <div key={colmena.id}>
                    <div className="card rounded p-3 mx-2 mx-md-3 bee-card" style={cardStyles.hiveCard}>
                      <div className="row g-0 align-items-center">
                        <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
                          <img
                            src={imagenes[index % imagenes.length]}
                            alt="Imagen de la colmena"
                            className="img-fluid rounded"
                            style={{ 
                              width: '300px', 
                              height: '250px', 
                              objectFit: 'cover',
                              maxWidth: '100%' 
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-8">
                          <h3 className="mb-3 text-center text-md-start">Numero de colmena: {colmena.id}</h3>
                          <div className="row">
                            <div className="col-12 col-sm-6 mb-2">
                              <p className="mb-1"><strong>Ubicación:</strong> {colmena.location || 'N/A'}</p>
                              <p className="mb-1">
                                <strong>Estado:</strong> <span className={`badge ${colmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{colmena.status === 'Active' ? 'Activa' : 'Inactiva'}</span>
                              </p>
                              <p className="mb-1"><strong>Apicultor:</strong> {colmena.beekeeper_id?.first_name || 'N/A'} {colmena.beekeeper_id?.last_name || ''}</p>
                              <p className="mb-1"><strong>Cuadros cría abierta:</strong> {colmena.open_brood_frames || 'N/A'}</p>
                              <p className="mb-1"><strong>Cuadros cría operculada:</strong> {colmena.capped_brood_frames || 'N/A'}</p>
                              <p className="mb-1"><strong>Cuadros de comida:</strong> {colmena.food_frames || 'N/A'}</p>
                            </div>
                            <div className="col-12 col-sm-6 mb-2">
                              <p className="mb-1"><strong>Presencia reina:</strong> {colmena.queen_presence ? 'Sí' : 'No'}</p>
                              <p className="mb-1"><strong>Color reina:</strong> {colmena.queen_color || 'N/A'}</p>
                              <p className="mb-1"><strong>Origen reina:</strong> {colmena.origin || 'N/A'}</p>
                              <p className="mb-1"><strong>Observaciones:</strong> {colmena.observations || 'N/A'}</p>
                              <p className="mb-1"><strong>Fecha de creación:</strong> {colmena.registration_date ? new Date(colmena.registration_date).toISOString().split('T')[0] : 'N/A'}</p>
                            </div>
                          </div>
                          {colmena.id_weather_conditions && (
                            <div className="row mt-2">
                              <div className="col-12">
                                <h5 className="mb-2">Condiciones climáticas:</h5>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <p className="mb-1"><strong>Temperatura:</strong> {colmena.id_weather_conditions.temp_c || 'N/A'}°C / {colmena.id_weather_conditions.temp_f || 'N/A'}°F</p>
                                    <p className="mb-1"><strong>Condiciones:</strong> {colmena.id_weather_conditions.text || 'N/A'}</p>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <p className="mb-1"><strong>Viento:</strong> {colmena.id_weather_conditions.wind_kph || 'N/A'} kph</p>
                                    <p className="mb-1"><strong>Presión:</strong> {colmena.id_weather_conditions.pressure_mb || 'N/A'} mb</p>
                                    <p className="mb-1"><strong>Humedad:</strong> {colmena.id_weather_conditions.humidity_indices || 'N/A'}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <HistoryCard 
                      colmenaId={colmena.id} 
                      monitorings={monitorings} 
                      harvestings={harvestings}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {!loading && data.length > 0 && (
        <div className="text-center mb-4">
          <button 
            className="btn btn-warning" 
            onClick={generatePDF}
            style={{ padding: '10px 20px', fontSize: '1.1rem' }}
          >
            Generar PDF del Historial
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Historial;