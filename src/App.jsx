
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logoGoogle from './assets/googleIcon.png';
import logo from './assets/logo.png';

//  Página de inicio
function Home() {
  return (
    <div className="root">
      <h1 className="letterH1">Control Diario</h1>
      <header>
        <div>
          <img src={logo} alt="logo" className='logo' />
        </div>
      </header>
      <div className="buttons">

        <Link to="/login1">
          <button>Iniciar Sesión</button>
        </Link>
        <Link to="/registro">
          <button>Registro</button>
        </Link>
      </div>
      <div className="boxGoogle">
        <Link to="/loginGoogle">
          <button className="buttonGoogle">
            <img src={logoGoogle} alt="logoGoogle" />
            <p>Continuar con Google</p>
          </button>
        </Link>
      </div>
    </div>
  );
}


// Iniciar Sesion
function Login1() {
  return (
    <div className="root rootLogin">
      <header>
        <div>
          <img src={logo} alt="logo" className='logo' />
        </div>
      </header>
      <div className="Formulario">
        <form action="">
          <div className='form'>
          <label htmlFor="" className='email'>Email </label>
          <input type="email"  />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          
          </div>
          <button type='submit' className='buttonLogin'><span>Iniciar Sesion</span></button>
        </form>
      </div>
      {/* <div className='hola'>
        <OlvidoContraseña />
      </div> */}
    <div className='olvido'>
      <Link to="/olvido" >
        <p>Olvidaste Contraseña?</p>
      </Link>

    </div>

    </div>
  );
}
 function Olvido() {
  return (
    <div className="root">
      <h1>Recupera tu contraseña</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1 className="letterH1">Perfil del Usuario</h1>
      <p>Contenido de la página de perfil</p>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter className="root">
      
      <Routes className="root">
        <Route path="/" element={<Home />} />       {/* Ruta principal */}
        <Route path="/login1" element={<Login1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/olvido" element={<Olvido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
