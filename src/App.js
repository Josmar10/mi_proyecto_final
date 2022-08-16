import { useState, useEffect } from 'react';

import { BaseDatos } from './ConfiguracionFirebase';
import NuevaPublicacion from './componentes/NuevaPublicacion';
import Publicacion from './componentes/Publicacion';

import NuevoUsuario from './componentes/NuevoUsuario';
import Usuario from './componentes/Usuario';
import './App.css';

function App() {
  const [usuarios, setUsuario] = useState([]);
  const [publicaciones, setPublicacion] = useState([]);

  function AgregarNuevoUsuario(usuario) { }

  function AgregarNuevaPublicacion(publicacion) {

    MostrarPublicacion();
  }

  function MostrarPublicacion() {
    const ListaPublicacion = [];
    BaseDatos.collection('Publicaciones').get()
      .then(Resultado => {
        Resultado.forEach(publicacion => {
          ListaPublicacion.push(publicacion.data());

        })
        setPublicacion(ListaPublicacion);

      }).catch(error => console.log(error));
  }

  useEffect(MostrarPublicacion, []);

  return (
    <div className="App">
      <header>
        <div class="header">
          <div class="welcome">

          Muro Interactivo
          </div>
        </div>
      </header>

      <div class="ContCenter">
        <header className="App-header">
          <NuevoUsuario AgregarNuevoUsuario={AgregarNuevoUsuario} />
          {
            usuarios && usuarios.length > 0 && usuarios.slice().reverse().map((usuario, i) => {
              const { user, clave, nombre, apellido } = usuario;
              return (<Usuario key={i} user={user} clave={clave} nombre={nombre} apellido={apellido} />)
            })
          }
        </header>
      </div>

      <div class="ContCenter">
        <header className="App-header">
          <NuevaPublicacion AgregarNuevaPublicacion={AgregarNuevaPublicacion} />
          {
            publicaciones && publicaciones.length > 0 && publicaciones.slice().reverse().map((publicacion, i) => {
              const { user, post } = publicacion;
              return (<Publicacion key={i} user={user} post={post} />)
            })
          }
        </header>
      </div>

      <footer>
        <div class="footer">
          <div class="footerMsg">
            Gracias por visitarnos
          </div>
        </div>
      </footer>
    </div>
  );
}
function registrar() {
  console.log('Diste un clic');
}

export default App;