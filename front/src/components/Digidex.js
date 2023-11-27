import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Digidex() {
    const [digiListVisible, setDigiListVisible] = useState(false);
    const [digimonName, setDigimonName] = useState("");
    const [digimonImage, setDigimonImage] = useState("./digimon.png");
    const [digimonLevel, setDigimonLevel] = useState("Desconocido");
    const [digimonId, setDigimonId] = useState("Desconocido");
    const [digimonAttribute, setDigimonAttribute] = useState("Desconocido");
    const [digimonDescription, setDigimonDescription] = useState("Desconocido");
    const [digimonInheritable, setDigimonInheritable] = useState("Desconocido");
    const [digimonMove, setDigimonMove] = useState("Desconocido");
    const [digimonPower, setDigimonPower] = useState("Desconocido");
    const [digimonSPCost , setDigimonSPCost] = useState("Desconocido");
    const [digimonType, setDigimonType] = useState("Desconocido");
    const [digimons, setDigimons] = useState([]);
    const navigate = useNavigate();

    const toggleList = () => {
        setDigiListVisible(!digiListVisible);
    };


    function Editar( id ) {
        navigate("/admin-crud/" + id);
    }


    const url = process.env.REACT_APP_BASE_URL + '/api/digimon-moves/';

    const fetchDigimon = async () => {
        try {

            const response = await fetch( url + digimonName );
            if (!response.ok) {
                throw new Error(`No se pudo encontrar el Digimon: ${response.statusText}`);
            }

            const data = await response.json();

            console.log( data.move['spcost'] , 'data' );
            // setDigimonImage(data[0].img);
            setDigimonId(data.move['_id']);
            setDigimonAttribute(data.move['attribute']);
            setDigimonDescription(data.move['description']);
            setDigimonInheritable(data.move['inheritable']);
            setDigimonMove(data.move['move']);
            setDigimonPower(data.move['power']);
            setDigimonSPCost(data.move['spcost']);
            setDigimonType(data.move['type']);
        } catch (error) {
            console.error(error);
            setDigimonImage("./digimon-palmon.gif");
            setDigimonLevel("Desconocido");
        }
    };

    const listDigimons = async () => {
        try {
            const response = await fetch( url );
            if (!response.ok) {
                throw new Error(`No se pudo obtener la lista de Digimons: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data['moves'], 'list');
            setDigimons(data['moves']);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        listDigimons();
    }, []);

    const handleAdminClick = () => {
        navigate('/admin-crud');
    };

    
 

    return (
        <div className="container mt-5">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/uno.jpeg" alt="Uno" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/dos.jpeg" alt="Dos" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="/tres.jpeg" alt="Tres" className="d-block w-100"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="d-flex justify-content-between align-items-start">
                <button id="toggleButton" className="btn btn-primary mb-3" onClick={toggleList}>
                    Mostrar/Ocultar Lista de Digimons y Editar Comportamientos
                </button>

                {/* Botón para navegar a la vista de administración CRUD */}
                <button className="btn btn-success mb-3" onClick={handleAdminClick}>
                    Agregar Nuevos Comportamientos
                </button>

                
            </div>
            {digiListVisible && (
                <div className="digimon-list-container mt-3">
                    <div className="row">
                        {digimons.map(digi => (
                            <div className="col-md-3 mt-4" key={digi['Move']}>
                                <div className="card shadow">
                                    {/* <img className="card-img-top digi-img" src={digi.img} alt={digi.name} /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{digi['move']}</h5>
                                        <p> ID: { digi['_id']} </p>
                                        <p> Descripción: { digi['description']} </p>
                                        <p> Heredable: { digi['inheritable']} </p>
                                        <p> Poder: { digi['power']} </p>
                                        <p> SP Cost: { digi['spcost']} </p>
                                        <p> Tipo: { digi['type']} </p>
                                        <button  class="btn btn-warning" type="button" onClick={() => Editar( digi['_id']  )}> Editar </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Digidex;
