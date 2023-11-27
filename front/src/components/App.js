import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Digidex from './Digidex';
import AdminCrud from './AdminCrud'; // Asegúrate de tener este componente para la vista CRUD

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Digidex />} />
                    <Route path="/admin-crud/:id" element={<AdminCrud />} />
                    <Route path="/admin-crud" element={<AdminCrud />} />
                    {/* Agrega más rutas según sea necesario */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;


