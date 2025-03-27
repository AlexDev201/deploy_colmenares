import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./assets/componentes/Login/Login";
import UserRegister from "./assets/componentes/UserRegister/UserResgirter";
import Dashboard from './assets/componentes/Dashboard/Dahsboard';
import HivenRegister from './assets/componentes/HivenRegister/HivenRegister';
import RecuperarContraseña from './assets/componentes/Recuperar_contraseña/Recuperar_contraseña';
import Recoleccion from './assets/componentes/Recoleccion/Recolecion';
import EditColmena from './assets/componentes/EditColmena/EditColmena';
import Monitoreo from './assets/componentes/Monitoreo/Monitoreo';
import ConfirmPassword from './assets/componentes/ConfirmPassword/ConfirmPassword';
import EditUser from './assets/componentes/EditUser/EditUser';
import ViewApicultor from './assets/componentes/ViewApicultor/ViewApicultor';
import List_Monitoreo from './assets/componentes/List_Monitoreo/List_Monitoreo';
import List_Recoleccion from './assets/componentes/ListRecoleccion/List_Recoleccion';
import ProtectedRoute from './assets/componentes/ProtectedRoute/ProtectedRoute';
import Scan_QR from './assets/componentes/Scan_QR/Scan_QR';
import Edit_Monitoreo from './assets/componentes/Edit_Monitoreo/Edit_Monitoreo';
import Edit_Recoleccion from './assets/componentes/Edit_Recoleccion/Edit_Recoleccion';
import First_Registration from './assets/componentes/First_Registration.jsx/First_Registration';
import PublicColmenaView from './assets/componentes/Public_Hive_View/Public_Hive_View';
function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route 
        path="/First-Registration" 
        element={<ProtectedRoute checkFirstRegistration={true} />}
      >
        <Route index element={<First_Registration />} />
      </Route>
        {/* Rutas accesibles para todos */}
        <Route path="/" element={<Login />} />
        <Route path="/RecuperarContraseña" element={<RecuperarContraseña />} />
        <Route path="/ConfirmPassword/:uidb64/:token" element={<ConfirmPassword />} />
        <Route path="/First_Registration" element ={<First_Registration/>} />
        <Route path="/PublicColmenaView/:id" element={<PublicColmenaView/>} />
        {/* Rutas solo para ADMINISTRADORES */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/ViewApicultor" element={<ViewApicultor/>} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path='/UserRegister' element= {<UserRegister />} />
        </Route>

        {/* Rutas accesibles para ADMIN y APICULTOR */}
        <Route element={<ProtectedRoute allowedRoles={["admin", "beekeeper"]} />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/EditColmena/:colmenaId" element={<EditColmena />} />
          <Route path="/Monitoreo/:colmenaId" element={<Monitoreo />} />
          <Route path="/Recoleccion/:colmenaId" element={<Recoleccion />} />
          <Route path="/HivenRegister" element={<HivenRegister />} />
          <Route path="/List_Monitoreo" element={<List_Monitoreo />} />
          <Route path="/List_Recoleccion" element={<List_Recoleccion />} />
          <Route path="/Scan_QR" element={<Scan_QR/>} />
          <Route path="/Edit_Recoleccion/:id" element={<Edit_Recoleccion />} />
          <Route path="/Edit_Monitoreo/:id" element={<Edit_Monitoreo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
