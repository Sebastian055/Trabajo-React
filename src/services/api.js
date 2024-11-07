import React, { useState } from 'react';
import { obtenerActividadAleatoria } from '../services/api';

function ActividadAleatoria() {
  const [actividad, setActividad] = useState(null);
  const [error, setError] = useState(null);

  const manejarClick = async () => {
    try {
      const nuevaActividad = await obtenerActividadAleatoria();
      setActividad(nuevaActividad);
      setError(null);
    } catch {
      setError('Error al iniciar la actividad');
    }
  };

  return (
    <div className="actividad-aleatoria">
      <h3>Ten una actividad para entretenerte!</h3>
      <button onClick={manejarClick}>Obten una actividad:</button>

      {error && <p className="error">{error}</p>}

      {actividad && (
        <div className="actividad-detalle">
          <p><strong>Actividad:</strong> {actividad.activity}</p>
          <p><strong>Tipo:</strong> {actividad.type}</p>
          {actividad.participants && <p>
            <strong>Participantes:</strong> {actividad.participants}</p>}
          {actividad.price && <p><strong>Precio:</strong> {actividad.price === 0 ? 'gratis' : actividad.price}</p>}
        </div>
      )}
    </div>
  );
}

export default ActividadAleatoria;
