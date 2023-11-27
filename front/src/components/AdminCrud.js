import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de haber instalado axios: npm install axios
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate
} from "react-router-dom";


const AdminCrud = () => {
  // Define los estados para los campos del formulario
  // const [digiUpdate, setDigiUpdate] = useState(false);
  const [moveName, setMoveName] = useState('');
  const [spCost, setSpCost] = useState('');
  const [moveType, setMoveType] = useState('');
  const [movePower, setMovePower] = useState('');
  const [moveAttribute, setMoveAttribute] = useState('');
  const [inheritable, setInheritable] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  
  const url = process.env.REACT_APP_BASE_URL + '/api/digimon-moves/' ;
  
  
  const { id } = useParams();

  var digiUpdate = false;

  if( id != undefined ){
    digiUpdate = true
    console.log('dsadasdsa');

  }

  const fetchDigimon = async (e) => {

    if( id != undefined ){

      try {
        console.log( url + id, 'urlfecthc' );
        const response = await fetch( url + id );
        console.log( response , 'resp');
        if (!response.ok) {
            throw new Error(`No se pudo encontrar el Digimon: ${response.statusText}`);
        }
  
        const data =await response.json();
  
        console.log( data.move['SP Cost'] , 'data' );
        // setDigimonImage(data[0].img);
        // setDigimonId(data.move['_id']);
        setMoveAttribute(data.move['attribute']);
        setDescription(data.move['description']);
        setInheritable(data.move['inheritable']);
        setMoveName(data.move['move']);
        setMovePower(data.move['power']);
        setSpCost(data.move['spcost']);
        setMoveType(data.move['type']);
    } catch (error) {
        console.error(error);
        // setDigimonImage("./digimon-palmon.gif");
        // setDigimonLevel("Desconocido");
    }


    }


  }


  // Llamamos a fetchDigimon cuando el componente se monta
  useEffect(() => {
    fetchDigimon();
  }, []); 

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if( id != undefined ){

      UpdateDigimon();

    }else{

      InsertDigimon()


    }
  };

  async function UpdateDigimon(){

    

    // Crea un objeto con los datos del movimiento
    const newMove = {
      "move": moveName,
      "spcost": spCost,
      "type": moveType,
      "power": movePower,
      "attribute": moveAttribute,
      "inheritable": inheritable,
      "description": description,
    };

    try {
      // Envía los datos al backend para agregar el movimiento a la base de datos
      const response = await axios.put(  url + id , newMove);

      // Maneja la respuesta del servidor (puedes mostrar un mensaje de éxito o redireccionar, por ejemplo)
      console.log('Movimiento agregado con éxito:', response.data);

      // Limpia los campos del formulario
      setMoveName('');
      setSpCost('');
      setMoveType('');
      setMovePower('');
      setMoveAttribute('');
      setInheritable('');
      setDescription('');

      alert('Movimiento actualizado con éxito:'  );

      navigate('/');
    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud al servidor (puedes mostrar un mensaje de error)
      console.error('Error al agregar el movimiento:', error);
    }


  }

  async function InsertDigimon(){

    

    // Crea un objeto con los datos del movimiento
    const newMove = {
      move: moveName,
      spcost: spCost,
      type: moveType,
      power: movePower,
      attribute: moveAttribute,
      inheritable: inheritable,
      description: description,
    };

    try {
      // Envía los datos al backend para agregar el movimiento a la base de datos
      const response = await axios.post(  url , newMove);

      // Maneja la respuesta del servidor (puedes mostrar un mensaje de éxito o redireccionar, por ejemplo)
      console.log('Movimiento agregado con éxito:', response.data);

      // Limpia los campos del formulario
      setMoveName('');
      setSpCost('');
      setMoveType('');
      setMovePower('');
      setMoveAttribute('');
      setInheritable('');
      setDescription('');

      alert('Movimiento agregado con éxito:'  );

      navigate('/');

    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud al servidor (puedes mostrar un mensaje de error)
      console.error('Error al agregar el movimiento:', error);
    }


  }


  async function DeleteDigimon(){

    

    // Crea un objeto con los datos del movimiento
    

    try {
      // Envía los datos al backend para agregar el movimiento a la base de datos
      const response = await axios.delete(  url + id );

      // Maneja la respuesta del servidor (puedes mostrar un mensaje de éxito o redireccionar, por ejemplo)
      console.log('Movimiento agregado con éxito:', response.data);

      // Limpia los campos del formulario
      

      alert('eliminado con éxito:'  );

      navigate('/');

    } catch (error) {
      // Maneja cualquier error que ocurra durante la solicitud al servidor (puedes mostrar un mensaje de error)
      console.error('Error al agregar el movimiento:', error);
    }


  }


    // const fetchDigimon = async () => {
        
    // };

  return (
    <div>
      <h2>Agregar Movimiento de Digimon</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Movimiento:</label>
          <input
            type="text"
            value={moveName}
            onChange={(e) => setMoveName(e.target.value)}
          />
        </div>
        <div>
          <label>Costo de SP:</label>
          <input
            type="number"
            value={spCost}
            onChange={(e) => setSpCost(e.target.value)}
          />
        </div>
        <div>
          <label>Tipo de Movimiento:</label>
          <input
            type="text"
            value={moveType}
            onChange={(e) => setMoveType(e.target.value)}
          />
        </div>
        <div>
          <label>Poder del Movimiento:</label>
          <input
            type="number"
            value={movePower}
            onChange={(e) => setMovePower(e.target.value)}
          />
        </div>
        <div>
          <label>Atributo del Movimiento:</label>
          <input
            type="text"
            value={moveAttribute}
            onChange={(e) => setMoveAttribute(e.target.value)}
          />
        </div>
        <div>
          <label>Heredable:</label>
          <input
            type="text"
            value={inheritable}
            onChange={(e) => setInheritable(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {digiUpdate && (
          
          <button type="button" class="btn btn-danger" onClick={() => DeleteDigimon()}>Eliminar Movimiento</button>
        )} 
        {digiUpdate ? (
          <button type="submit"  class="btn btn-warning">Actualizar Movimiento</button>
          
        ): (
          <button type="submit"  class="btn btn-primary">Registra Movimiento</button>
          )} 

      
      </form>
    </div>
  );
};

export default AdminCrud;

