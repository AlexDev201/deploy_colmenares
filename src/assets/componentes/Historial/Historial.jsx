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
    <div className="card rounded p-3 mx-2 mx-md-3 mt-3" style={{ border: '1px solid #ddd', boxShadow: '0 5px 15px rgba(0,0,0,0.15)', maxWidth: '800px', margin: '0 auto' }}>
      <h5 className="text-center mb-2">Historial de Colmena {colmenaId}</h5>
      <div className="row">
        <div className="col-md-6">
          <h6 className="mb-2">Monitoreos</h6>
          {filteredMonitorings.length === 0 ? (
            <p className="small">No hay monitoreos registrados.</p>
          ) : (
            <div className="small">
              {filteredMonitorings.map((mon) => (
                <div key={mon.id} className="mb-2 p-2 border-bottom">
                  <strong>Fecha:</strong> {new Date(mon.monitoring_date).toLocaleDateString()}<br/>
                  <strong>Reina:</strong> {mon.queen_observations || 'N/A'}<br/>
                  <strong>Alimento:</strong> {mon.food_observations || 'N/A'}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h6 className="mb-2">Recolecciones</h6>
          {filteredHarvestings.length === 0 ? (
            <p className="small">No hay recolecciones registradas.</p>
          ) : (
            <div className="small">
              {filteredHarvestings.map((harv) => (
                <div key={harv.id} className="mb-2 p-2 border-bottom">
                  <strong>Fecha:</strong> {new Date(harv.harvest_date).toLocaleDateString()}<br/>
                  <strong>Miel:</strong> {harv.honey_production || 0} kg<br/>
                  <strong>Polen:</strong> {harv.pollen_production || 0} kg
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
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
    // La lógica de useEffect se mantiene igual
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
    // La lógica de generatePDF se mantiene igual
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

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <div className="container-fluid flex-grow-1 py-3" ref={contentRef}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 mb-4">
            <h3 className="text-center mb-3">Historial Completo de Colmenas</h3>
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
                    <div className="card rounded p-3 mx-auto bee-card" style={{ border: '1px solid #ddd', boxShadow: '0 5px 15px rgba(0,0,0,0.15)', maxWidth: '800px' }}>
                      <div className="row g-0 align-items-center">
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                          <img
                            src={imagenes[index % imagenes.length]}
                            alt="Imagen de la colmena"
                            className="img-fluid rounded"
                            style={{ width: '100%', height: '120px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="col-12 col-md-9">
                          <div className="row">
                            <div className="col-md-6">
                              <h5 className="mb-1">Colmena #{colmena.id}</h5>
                              <p className="mb-1 small"><strong>Ubicación:</strong> {colmena.location || 'N/A'}</p>
                              <p className="mb-1 small">
                                <strong>Estado:</strong> <span className={`badge ${colmena.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{colmena.status === 'Active' ? 'Activa' : 'Inactiva'}</span>
                              </p>
                              <p className="mb-1 small"><strong>Apicultor:</strong> {colmena.beekeeper_id?.first_name || 'N/A'} {colmena.beekeeper_id?.last_name || ''}</p>
                              <p className="mb-1 small"><strong>Fecha registro:</strong> {colmena.registration_date ? new Date(colmena.registration_date).toISOString().split('T')[0] : 'N/A'}</p>
                            </div>
                            <div className="col-md-6">
                              <p className="mb-1 small"><strong>Cuadros cría abierta:</strong> {colmena.open_brood_frames || 'N/A'}</p>
                              <p className="mb-1 small"><strong>Cuadros cría operculada:</strong> {colmena.capped_brood_frames || 'N/A'}</p>
                              <p className="mb-1 small"><strong>Cuadros comida:</strong> {colmena.food_frames || 'N/A'}</p>
                              <p className="mb-1 small"><strong>Reina:</strong> {colmena.queen_presence ? 'Presente' : 'Ausente'} | <strong>Color:</strong> {colmena.queen_color || 'N/A'}</p>
                            </div>
                          </div>
                          {colmena.observations && (
                            <p className="mb-0 small text-muted"><strong>Observaciones:</strong> {colmena.observations}</p>
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
            className="btn btn-primary" 
            onClick={generatePDF}
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