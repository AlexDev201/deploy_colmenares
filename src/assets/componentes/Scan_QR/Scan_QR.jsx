import React, { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import Admin_Nav_Bar from '../Single_Components/Admin_Nav_Bar';
import NavBar from '../Single_Components/NavBar';
import BackArrowButton from '../Single_Components/BackButton';
import Footer from '../Single_Components/Footer';
import { useNavigate } from 'react-router-dom';

const Scan_QR = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [scanning, setScanning] = useState(true); 
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [instructionsContent, setInstructionsContent] = useState('');
  const navigate = useNavigate();

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
  
  const role = getCookie('role');
  const token = getCookie('token');

  // Función de escaneo definida fuera del useEffect para poder usarla en resetScanner
  const scan = () => {
    if (!scanning) return;
    
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const code = jsQR(imageData.data, canvas.width, canvas.height);
      if (code) {
        const qrContent = code.data;
        setQrData(qrContent);
        fetchData(qrContent);
        setScanning(false); // Detener el escaneo
        
        if (video.srcObject) {
          video.srcObject.getTracks().forEach((track) => track.stop());
        }
        return;
      }
    }
    if (scanning) {
      requestAnimationFrame(scan);
    }
  };

  // Verificar el estado actual de los permisos
  const checkCameraPermission = async () => {
    try {
      // Verificar si la API de permisos está disponible
      if (navigator.permissions && navigator.permissions.query) {
        const result = await navigator.permissions.query({ name: 'camera' });
        
        if (result.state === 'denied') {
          setPermissionDenied(true);
          return false;
        } else {
          setPermissionDenied(false);
          return true;
        }
      }
      return true; // Si la API no está disponible, asumimos que podemos intentar
    } catch (err) {
      console.error('Error al verificar permisos:', err);
      return true; // En caso de error, intentamos igualmente
    }
  };

  // Función para mostrar instrucciones en modal
  const showInstructionsInModal = (content) => {
    setInstructionsContent(content);
    setShowInstructionsModal(true);
  };

  // Función para mostrar instrucciones manuales
  const provideManualInstructions = () => {
    const instructions = `
      <h4>Cómo habilitar la cámara</h4>

      <p><strong>En navegadores de escritorio:</strong></p>
      <ol>
        <li>Haga clic en el icono de cámara/candado en la barra de direcciones</li>
        <li>Seleccione "Permitir" para la cámara</li>
        <li>Recargue la página después de cambiar la configuración</li>
      </ol>
      
      <p><strong>En dispositivos móviles:</strong></p>
      <ol>
        <li>Vaya a Configuración de su dispositivo</li>
        <li>Busque Aplicaciones o Administrador de aplicaciones</li>
        <li>Encuentre su navegador (Chrome, Safari, etc.)</li>
        <li>Vaya a Permisos</li>
        <li>Habilite la Cámara</li>
      </ol>
    `;
    showInstructionsInModal(instructions);
  };

  // Función para abrir la configuración de permisos
  const openPermissionSettings = () => {
    // Detectar si es un dispositivo Android
    const isAndroid = /android/i.test(navigator.userAgent);
    // Detectar si es un dispositivo iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isAndroid) {
      // Intentar abrir la configuración de Android
      try {
        // Mostrar instrucciones primero
        const androidInstructions = `
          <h4>Configurar permisos en Android</h4>
          <p>Se intentará abrir la configuración de permisos. Si no funciona, siga estas instrucciones:</p>
          <ol>
            <li>Vaya a Configuración de su teléfono</li>
            <li>Vaya a Aplicaciones o Administrador de aplicaciones</li>
            <li>Busque su navegador (Chrome, Firefox, etc.)</li>
            <li>Seleccione Permisos</li>
            <li>Active el permiso de Cámara</li>
            <li>Regrese a la aplicación y refresque la página</li>
          </ol>
          <p>Después de cerrar este mensaje, se intentará abrir la configuración automáticamente.</p>
        `;
        showInstructionsInModal(androidInstructions);
        
        // Intento de abrir la configuración después de un breve retraso
        setTimeout(() => {
          window.location.href = 'app-settings:';
          // Alternativa para algunos dispositivos/navegadores Android
          setTimeout(() => {
            window.location.href = 'intent://settings#Intent;scheme=package;end';
          }, 500);
        }, 3000);
      } catch (err) {
        console.error('Error al abrir configuración:', err);
        provideManualInstructions();
      }
    } else if (isIOS) {
      // Mostrar instrucciones específicas para iOS
      const iOSInstructions = `
        <h4>Configurar permisos en iOS</h4>
        <ol>
          <li>Cierre esta aplicación</li>
          <li>Vaya a Configuración</li>
          <li>Busque Safari o su navegador</li>
          <li>Vaya a "Permisos de sitios web"</li>
          <li>Busque Cámara y habilítela para este sitio</li>
          <li>Regrese a la aplicación y recargue la página</li>
        </ol>
      `;
      showInstructionsInModal(iOSInstructions);
    } else {
      // Instrucciones para navegadores de escritorio
      provideManualInstructions();
    }
    
    // También intentamos solicitar permisos nuevamente para navegadores de escritorio
    resetScanner();
  };

  // Función para reiniciar el escáner
  const resetScanner = async () => {
    // Reiniciar los estados
    setQrData(null);
    setFetchedData(null);
    setError(null);
    
    // Detener cualquier stream de video actual
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    
    // Verificar el estado de los permisos antes de intentar
    const permissionAvailable = await checkCameraPermission();
    
    if (!permissionAvailable) {
      // Si el permiso está denegado, mostrar mensaje pero aún así intentar
      // Esto forzará al navegador a mostrar el diálogo de permiso nuevamente
      // en algunos navegadores, o mostrará un mensaje de error que ayuda al usuario
      console.log('Permiso de cámara denegado. Intentando solicitar de nuevo...');
    }
    
    setScanning(true);
    
    // Configuración de la cámara
    const constraints = {
      video: {
        facingMode: 'environment',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    };

    try {
      // Solicitar acceso a la cámara nuevamente
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', true);
        videoRef.current.play();
        requestAnimationFrame(scan);
        
        // Reiniciar el temporizador
        const timeoutId = setTimeout(() => {
          if (scanning && !qrData && !fetchedData) {
            setError(new Error("Tiempo límite alcanzado: no se detectó un QR"));
            setScanning(false);
            stream.getTracks().forEach((track) => track.stop());
          }
        }, 30000);
        
        return () => clearTimeout(timeoutId);
      }
    } catch (err) {
      console.error('Error al acceder a la cámara:', err);
      
      // Determinar si es un error de permiso
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setPermissionDenied(true);
        setError(new Error("Permiso para usar la cámara denegado. Por favor, reinicie los permisos en la configuración del navegador."));
      } else {
        setError(err);
      }
      setScanning(false);
    }
  };

  const handleEdit = () => {
    window.location.href = `/EditColmena/${fetchedData.id}`;
  };

  const handleMonitoreo = () => {
    window.location.href = `/Monitoreo/${fetchedData.id}`;
  };

  const handleRecoleccion = () => {
    window.location.href = `/Recoleccion/${fetchedData.id}`;
  };

  useEffect(() => {
    if (scanning) {
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.setAttribute('playsinline', true);
            videoRef.current.play();
            requestAnimationFrame(scan);

            const timeoutId = setTimeout(() => {
              if (scanning && !qrData && !fetchedData) {
                setError(new Error("Tiempo límite alcanzado: no se detectó un QR"));
                setScanning(false);
                stream.getTracks().forEach((track) => track.stop());
              }
            }, 30000);

            return () => clearTimeout(timeoutId);
          }
        })
        .catch((err) => {
          console.error('Error al acceder a la cámara:', err);
          
          if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            setPermissionDenied(true);
            setError(new Error("Permiso para usar la cámara denegado. Por favor, reinicie los permisos en la configuración del navegador."));
          } else {
            setError(err);
          }
          setScanning(false);
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [scanning]); 

  const fetchData = async (qrContent) => {
    try {
      const urlParts = qrContent.split('/');
      const id = urlParts[urlParts.length - 1];
  
      const response = await fetch(`https://colmenaresdeleje.onrender.com/beehive/detail-hive/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      
      if (!response.ok) throw new Error('Error en la petición');
      
      const data = await response.json();
      setFetchedData(data);
    } catch (err) {
      console.error('Error al obtener datos:', err);
      setError(err);
    }
  };

 
  const handleReturn = () => {
    navigate('/Dashboard');
  };

  // Componente Modal actualizado con tonalidades de amarillo
  const InstructionsModal = ({ show, onClose, content }) => {
    if (!show) return null;
    
    return (
      <div className="modal fade show" 
           style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
           tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: '#fffbeb', border: '1px solid #fbbf24' }}>
            <div className="modal-header" style={{ backgroundColor: '#fef3c7', borderBottom: '1px solid #fbbf24' }}>
              <h5 className="modal-title" style={{ color: '#92400e' }}>Instrucciones</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
                aria-label="Close"
                style={{ color: '#92400e' }}
              ></button>
            </div>
            <div 
              className="modal-body" 
              dangerouslySetInnerHTML={{ __html: content }}
              style={{ color: '#78350f' }}
            >
            </div>
            <div className="modal-footer" style={{ backgroundColor: '#fef3c7', borderTop: '1px solid #fbbf24' }}>
              <button 
                type="button" 
                className="btn" 
                onClick={onClose}
                style={{ 
                  backgroundColor: '#fbbf24', 
                  color: '#78350f', 
                  borderColor: '#f59e0b',
                  fontWeight: '500'
                }}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {role === 'admin' ? <Admin_Nav_Bar /> : <NavBar />}
      <BackArrowButton/>
      <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3 py-5">
        <div className="col-12 col-md-6 col-lg-4">
          <h1 className="text-center mb-4 fw-bold">Escanear QR de la colmena</h1>

          {error && !fetchedData && (
            <div className="alert alert-danger text-center mb-4" role="alert">
              Error: {error.message}
              <div className="mt-3">
                {permissionDenied ? (
                  <div className="text-center">
                    <p className="text-danger">Se ha denegado el permiso para acceder a la cámara.</p>
                    <div className="d-flex flex-column gap-2 align-items-center">
                      <button 
                        className="btn btn-primary" 
                        onClick={openPermissionSettings}
                      >
                        Ir a configuración de permisos
                      </button>
                      <small className="text-muted">
                        Si el botón no funciona, deberá habilitar la cámara manualmente en la configuración de su dispositivo.
                      </small>
                      <button 
                        className="btn btn-outline-secondary mt-2" 
                        onClick={resetScanner}
                      >
                        Intentar nuevamente
                      </button>
                    </div>
                  </div>
                ) : (
                  <button 
                    className="btn btn-primary" 
                    onClick={resetScanner}
                  >
                    Intentar de nuevo
                  </button>
                )}
              </div>
            </div>
          )}

          {scanning && !qrData && !error && (
            <div className="d-flex justify-content-center">
              <div className="position-relative border border-primary border-4 rounded-3 overflow-hidden shadow-lg bg-dark p-3"
                   style={{ maxWidth: '400px', width: '100%', aspectRatio: '1 / 1' }}>
                <video
                  ref={videoRef}
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-2"
                />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <div className="position-absolute top-50 start-50 translate-middle border border-success border-2 opacity-75"
                     style={{ width: '50%', height: '50%' }}></div>
              </div>
            </div>
          )}

          {qrData && !fetchedData && (
            <div className="text-center mt-4 bg-white rounded-3 shadow p-4">
              <h3 className="fw-semibold text-primary">ID Capturado:</h3>
              <p className="mt-3 p-3 bg-light rounded-2 text-break">{qrData}</p>
              <p>Cargando datos...</p>
            </div>
          )}

          {fetchedData && (
            <div className="text-center mt-4 bg-white rounded-3 shadow p-4">
              <h3 className="fw-semibold ">Información de la Colmena:</h3>
              <div className="mt-3">
                {Array.isArray(fetchedData) ? (
                  fetchedData.map((item, index) => (
                    <div key={index} className="mb-3 p-3 bg-light rounded-2 shadow-sm border">
                      <p className="mb-1"><strong>ID:</strong> {item.id}</p>
                      <p className="mb-1"><strong>Nombre:</strong> {item.name || 'N/A'}</p>
                      <p className="mb-0"><strong>Estado:</strong> {item.status || 'N/A'}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-3 bg-light rounded-2 shadow-sm border">
                    <p className="mb-1"><strong>Numero de colmena:</strong> {fetchedData.id}</p>
                    <p className="mb-1"><strong>Fecha de registro:</strong> {fetchedData.registration_date || 'N/A'}</p>
                    <p className="mb-0"><strong>Ubicacion:</strong> {fetchedData.location || 'N/A'}</p>
                    <p className="mb-0"><strong>Cuadros de cria abierta:</strong> {fetchedData.open_brood_frames || 'N/A'}</p>
                    <p className="mb-0"><strong>Cuadros de cria operculada:</strong> {fetchedData.capped_brood_frames || 'N/A'}</p>
                    <p className="mb-0"><strong>Presencia de la reina:</strong> {fetchedData.queen_presence || 'N/A'}</p>
                    <p className="mb-0"><strong>Color de la reina:</strong> {fetchedData.queen_color || 'N/A'}</p>
                    <p className="mb-0"><strong>Origen la reina:</strong> {fetchedData.origin || 'N/A'}</p>
                    <p className="mb-0"><strong>Cuadros de comida:</strong> {fetchedData.food_frames || 'N/A'}</p>
                    <p className="mb-0"><strong>Observaciones:</strong> {fetchedData.observations || 'N/A'}</p>
                    <p className="mb-0"><strong>Grados centigrados:</strong> {fetchedData.id_weather_conditions.temp_c}</p>
                    <p className="mb-0"><strong>Grados farenheit:</strong> {fetchedData.id_weather_conditions.temp_f}</p>
                    <p className="mb-0"><strong>Condiciones:</strong> {fetchedData.id_weather_conditions.text}</p>
                    <p className="mb-0"><strong>Velocidad del viento:</strong> {fetchedData.id_weather_conditions.wind_kph}</p>
                    <p className="mb-0"><strong>Presion:</strong> {fetchedData.id_weather_conditions.pressure_mb}</p>
                    <p className="mb-0"><strong>Ubicacion:</strong> {fetchedData.location}</p>
                    <p className="mb-0"><strong>Indices de humedad:</strong> {fetchedData.id_weather_conditions.humidity_indices}</p>
                  </div>
                )}
              </div>
              
              {/* Botones de acción */}
              <div className="mt-4 d-flex flex-wrap justify-content-center gap-2">
                <button 
                  className="btn btn-warning" 
                  onClick={handleReturn}
                >
                  Ver Colmenas
                </button>
                
                <button 
                  className="btn btn-warning" 
                  onClick={resetScanner}
                >
                  Volver a Escanear
                </button>
                
                <button 
                  className="btn btn-warning" 
                  onClick={handleEdit}
                >
                  Editar Colmena
                </button>
                
                {/* Nuevos botones */}
                <button 
                  className="btn btn-warning" 
                  onClick={handleMonitoreo}
                >
                  Monitoreo
                </button>
                
                <button 
                  className="btn btn-warning" 
                  onClick={handleRecoleccion}
                >
                  Recolección
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de instrucciones */}
      <InstructionsModal 
        show={showInstructionsModal}
        onClose={() => setShowInstructionsModal(false)}
        content={instructionsContent}
      />
      
      <Footer />
    </div>
  );
};

export default Scan_QR;