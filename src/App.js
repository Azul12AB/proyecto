import './App.css';

import { useState } from 'react';

function App() {
  const [ruc, setRuc] = useState('');
  const [datos, setDatos] = useState({});

  const handleButtonClick = () => {
    fetch("https://apiperu.dev/api/ruc/" + ruc + "?api_token=04f89fdbcc0aba3c322d792f868881b7958a0cc55c8fd0efd43a0932c7f03f8d")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.data);
      });
  };

  return (
    <div className="App">
      <h1>API BUSCAR EMPRESA POR RUC</h1>
      <p>API SUNAT</p>
      <div className="container">
        <div className="input">
          <input
            className="ruc"
            id="ruc"
            name="ruc"
            placeholder="Número de RUC"
            type="number"
            value={ruc}
            onChange={(e) => setRuc(e.target.value)}
          />
        </div>
        <div className="button">
          <button id="boton" onClick={handleButtonClick}>
            BUSCAR
          </button>
        </div>
      </div>
      <div className="resultado">
        <div className="ruc">
          <div className="label">
            <h2>RUC</h2>
          </div>
          <div className="res">
            <p id="ruc">{datos.ruc || ''}</p>
          </div>
        </div>
        <div className="razon-social">
          <div className="label">
            <h2>Razón Social</h2>
          </div>
          <div className="res">
            <p id="razon-social">{datos.nombre_o_razon_social || ''}</p>
          </div>
        </div>
        <div className="direccion">
          <div className="label">
            <h2>Dirección</h2>
          </div>
          <div className="res">
            <p id="direccion">{datos.direccion_completa || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
