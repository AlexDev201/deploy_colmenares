import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../Single_Components/Header';

import Footer from '../Single_Components/Footer';
// Imágenes placeholders
import imagenColmena from 'src/img/abejitas.jpeg';

function PublicColmenaView() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [ultimoMonitoreo, setUltimoMonitoreo] = useState(null);
  const [ultimaRecoleccion, setUltimaRecoleccion] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/detail-public-hive/${id}/`);
        
        if (!response.ok) {
          throw new Error('No se encontró información para esta colmena');
        }
        
        const result = await response.json();
        setData(result);
        
        const monitoreoResponse = await fetch('https://colmenaresdeleje.onrender.com/monitoring/list-public-beehive-monitoring/');
        
        if (monitoreoResponse.ok) {
          const monitoreos = await monitoreoResponse.json();
          
          const monitoreosDeLaColmena = monitoreos.filter(m => m.hive_id === parseInt(id));
          
          if (monitoreosDeLaColmena.length > 0) {
            monitoreosDeLaColmena.sort((a, b) => new Date(b.monitoring_date) - new Date(a.monitoring_date));
            
            setUltimoMonitoreo(monitoreosDeLaColmena[0]);
          }
        }
        
        const recoleccionResponse = await fetch('https://colmenaresdeleje.onrender.com/harvesting/list-public-hive-harvesting/');
        
        if (recoleccionResponse.ok) {
          const recolecciones = await recoleccionResponse.json();
          
          const recoleccionesDeLaColmena = recolecciones.filter(r => r.hive_id === parseInt(id));
          
          if (recoleccionesDeLaColmena.length > 0) {
            recoleccionesDeLaColmena.sort((a, b) => new Date(b.harvest_date) - new Date(a.harvest_date));
            
            setUltimaRecoleccion(recoleccionesDeLaColmena[0]);
          }
        }
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);
  
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <Header/>
            
            <div className="card-body">
              {loading ? (
                <div className="text-center p-5">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <p className="mt-3">Cargando información de la colmena...</p>
                </div>
              ) : error ? (
                <div className="alert alert-danger text-center">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {error}
                </div>
              ) : data ? (
                <div className="row">
                  <div className="col-md-5 text-center mb-4">
                  <img 
                    src={imagenColmena} 
                    alt="Imagen de la colmena" 
                    className="img-fluid rounded border border-3 border-warning mb-3"
                    style={{ 
                      width: "300px", 
                      height: "300px", 
                      objectFit: "cover", 
                      objectPosition: "center"
                    }}
/>
                    <div className="d-flex justify-content-center">
                    
                    </div>
                  </div>
                  
                  <div className="col-md-7">
                    <h4 className="border-bottom border-warning pb-2 mb-3">Datos Generales</h4>
                    
                    <div className="row mb-4">
                      <div className="col-6">
                        <p><strong>Numero de colmena:</strong> {data.id}</p>
                        <p><strong>Ubicación:</strong> {data.location}</p>
                        <p><strong>Presencia de reina:</strong> {data.queen_presence ? 'Sí' : 'No'}</p>
                        <p><strong>Color de reina:</strong> {data.queen_color || 'No especificado'}</p>
                      </div>
                      <div className="col-6">
                        <p><strong>Cuadros cría abierta:</strong> {data.open_brood_frames}</p>
                        <p><strong>Cuadros cría operculada:</strong> {data.capped_brood_frames}</p>
                        <p><strong>Cuadros de comida:</strong> {data.food_frames}</p>
                        <p><strong>Origen:</strong> {data.origin || 'No especificado'}</p>
                        <p><strong>Último monitoreo:</strong> {ultimoMonitoreo 
                        ? new Date(ultimoMonitoreo.monitoring_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
                        : 'No hay monitoreos registrados'}</p>
                        <p><strong>Última recolección:</strong> {ultimaRecoleccion 
                        ? new Date(ultimaRecoleccion.harvest_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
                        : 'No hay recolecciones registradas'}</p>
                      </div>
                    </div>
                    
                    <h4 className="border-bottom border-warning pb-2 mb-3">Condiciones Ambientales</h4>
                    
                    {data ? (
                          <div className="row mb-3">
                            <div className="col-6">
                              <p><strong>Temperatura:</strong> 
                                {data.id_weather_conditions?.temp_c}°C / 
                                {data.id_weather_conditions?.temp_f}°F
                              </p>
                              <p><strong>Condiciones:</strong> {data.id_weather_conditions?.text}</p>
                            </div>
                            <div className="col-6">
                              <p><strong>Viento:</strong> {data.id_weather_conditions?.wind_kph} km/h</p>
                              <p><strong>Humedad:</strong> {data.id_weather_conditions?.humidity_indices}%</p>
                            </div>
                          </div>
                        ) : null}
                                            
                    {data.observations && (
                      <>
                        <h4 className="border-bottom border-warning pb-2 mb-3">Observaciones</h4>
                        <p>{data.observations}</p>
                      </>
                    )}
                    
                    <div className="text-muted text-end mt-3">
                      <small>Fecha de registro: {new Date(data.registration_date).toLocaleDateString()}</small>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center">No hay información disponible para esta colmena.</p>
              )}
            </div>
            
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicColmenaView;