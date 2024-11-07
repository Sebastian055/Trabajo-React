import React, { useState } from 'react';
import ObjetoDetalle from '../components/ObjetoDetalle';

function PaginaContacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEnviar = (e) => {
    e.preventDefault();
    alert('');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="pagina-contacto">
      <h2>Contacto</h2>
      
      <div className="informacion-contacto">
        <p><strong>Correo:</strong>sebastian.cifuentes055@pascualbravo.edu.co</p>
        <p><strong>Telefono:</strong> 111111111</p>
      </div>

      {/* Formulario de contacto */}
      <form className="formulario-contacto" onSubmit={handleEnviar}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </label>
        
        <button type="submit">Enviar</button>
      </form>

      {}
      <ObjetoDetalle id={1} /> {}
    </div>
  );
}

export default PaginaContacto;
