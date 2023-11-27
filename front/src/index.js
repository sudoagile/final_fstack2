import React from 'react'; // Importa React desde 'react' en lugar de 'react-bootstrap'
import ReactDOM from 'react-dom'; // No es necesario agregar '/client'
import styles from './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
