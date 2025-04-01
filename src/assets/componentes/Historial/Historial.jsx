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

function HistoryCard({ colmenaId, monitorings, harvestings }) {
  const colmenaIdStr = String(colmenaId);

  const filteredMonitorings = monitorings.filter(mon => {
    const match = String(mon.hive_id) === colmenaIdStr;
    console.log(`[HistoryCard] Comparando monitoreo hive_id: ${mon.hive_id} con colmenaId: ${colmenaId} -> ${match}`);
    return match;
  });
  const filteredHarvestings = harvestings.filter(harv => {
    const match = String(harv.hive_id) === colmenaIdStr;
    console.log(`[HistoryCard] Comparando recolección hive_id: ${harv.hive_id} con colmenaId: ${colmenaId} -> ${match}`);
    return match;
  });

  return (
    <div className="card rounded p-3 mx-2 mx-md-3 mt-3" style={{ border: '1px solid black', boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}>
      <h4 className="text-center mb-3">Historial de Colmena {colmenaId}</h4>
      <h5>Monitoreos</h5>
      {filteredMonitorings.length === 0 ? (
        <p>No hay monitoreos registrados para esta colmena.</p>
      ) : (
        <ul>
          {filteredMonitorings.map((mon) => (
            <li key={mon.id}>
              Fecha: {new Date(mon.monitoring_date).toLocaleDateString()} - 
              Observaciones reina: {mon.queen_observations || 'N/A'} - 
              Observaciones alimento: {mon.food_observations || 'N/A'} - 
              Observaciones generales: {mon.general_observations || 'N/A'}
            </li>
          ))}
        </ul>
      )}
      <h5>Recolecciones</h5>
      {filteredHarvestings.length === 0 ? (
        <p>No hay recolecciones registradas para esta colmena.</p>
      ) : (
        <ul>
          {filteredHarvestings.map((harv) => (
            <li key={harv.id}>
              Fecha: {new Date(harv.harvest_date).toLocaleDateString()} - 
              Producción de miel: {harv.honey_production || 0} kg - 
              Producción de polen: {harv.pollen_production || 0} kg
            </li>
          ))}
        </ul>
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

        console.log('[Historial] Colmenas cargadas:', hivesData);
        console.log('[Historial] Monitoreos cargados:', monitoringsData);
        console.log('[Historial] Recolecciones cargadas:', harvestingsData);

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
    const doc = new jsPDF();
    let yOffset = 10;

    doc.setFontSize(16);
    doc.text('Reporte Completo de Colmenas', 10, yOffset);
    yOffset += 10;

    data.forEach(colmena => {
      doc.setFontSize(12);
      doc.text(`Colmena ${colmena.id}`, 10, yOffset);
      yOffset += 5;

      doc.setFontSize(10);
      doc.text(`Ubicación: ${colmena.location || 'N/A'}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Estado: ${colmena.status || 'N/A'}`, 10, yOffset);
      yOffset += 5;
      // ... resto del código de PDF
    });

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

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <div className="container-fluid flex-grow-1 py-3">
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
                          <p className="mb-0 ms-0 ms-sm-3">Ubicación: {colmena.location || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3">
                            <strong>Estado:</strong> <span className={`badge ${colmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{colmena.status === 'Active' ? 'Activa' : 'Inactiva'}</span>
                          </p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Apicultor asignado:</strong> {colmena.beekeeper_id?.first_name} {colmena.beekeeper_id?.last_name}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros cría abierta:</strong> {colmena.open_brood_frames || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros cría operculada:</strong> {colmena.capped_brood_frames || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Cuadros de comida:</strong> {colmena.food_frames || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Presencia reina:</strong> {colmena.queen_presence ? 'Sí' : 'No'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Color reina:</strong> {colmena.queen_color || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Origen reina:</strong> {colmena.origin || 'N/A'}</p>
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Observaciones:</strong> {colmena.observations || 'N/A'}</p>
                          {colmena.id_weather_conditions && (
                            <>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Grados centígrados:</strong> {colmena.id_weather_conditions.temp_c || 'N/A'}</p>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Grados Fahrenheit:</strong> {colmena.id_weather_conditions.temp_f || 'N/A'}</p>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Condiciones:</strong> {colmena.id_weather_conditions.text || 'N/A'}</p>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Velocidad del viento:</strong> {colmena.id_weather_conditions.wind_kph || 'N/A'} kph</p>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Presión:</strong> {colmena.id_weather_conditions.pressure_mb || 'N/A'} mb</p>
                              <p className="mb-0 ms-0 ms-sm-3"><strong>Índices de humedad:</strong> {colmena.id_weather_conditions.humidity_indices || 'N/A'}</p>
                            </>
                          )}
                          <p className="mb-0 ms-0 ms-sm-3"><strong>Fecha de creación:</strong> {new Date(colmena.registration_date).toISOString().split('T')[0] || 'N/A'}</p>
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
              {!loading && data.length > 0 && (
                <button className="btn btn-primary mt-3 mx-auto d-block" onClick={generatePDF}>Generar PDF</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Historial;