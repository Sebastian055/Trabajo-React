import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ObjetoDetalle({ id }) {
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`#${id}`) .then(response => {
        setDetalle(response.data);
        setLoading(false);
      }) .catch(erorr => {
        setError('Error al cargar los detalles');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando </p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="detalle">
      <h3>Detalles del portafolio:</h3>
      {detalle && (
        <div>
          <p><strong>Nombre:</strong> {detalle.name}</p>
          <p><strong>Correo:</strong> {detalle.email}</p>
          <p><strong>Telefono:</strong> {detalle.phone}</p>
          <p><strong>Empresa:</strong> {detalle.company.name}</p>
          <p><strong>Sitio Web:</strong> {detalle.website}</p>
        </div>
      )}
    </div>
  );
}

export default ObjetoDetalle;
