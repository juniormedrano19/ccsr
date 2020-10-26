import React from 'react';
import {
    Link,
  } from "react-router-dom";

export const FutbolCard = ({
    id,
    name,
    posicion,
    dorsal,
    apodo,
    edad,
    suma
}) => {
    return (
        
        <div className="card ms-3" style={{ maxWidth:540}}>

        <div className="row no-gutters"> {/* sin espacio  */}
        <div className="col-md-4">

        <img src={`./assets/jugadores/${id}.jpg`} className="card-img" alt={ name }/>

        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text"> { posicion }</p>
       
        <p className="card-text">
         {/* text-muted es un tipo de fuente en bootstrap, small es una etiqueta pequeña  */}
            <small className="text-muted">{ apodo }</small>
        </p>
        <Link to={`./futbolista/${id}`}>
            Ver más...
        </Link>

        </div>

        </div>

        </div>
            
        </div>
    
    )
}
