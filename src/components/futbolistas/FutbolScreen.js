import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';


export const FutbolScreen = ({history}) => {
//con use Params puedo coger el argmuento o parametros del url
    const {jugadorId}= useParams();
    console.log(jugadorId);
//memorizar el hero y ejecutar la función cada vez que cambia el id
    const jugador1=useMemo(() => getHeroesById(jugadorId), [ jugadorId ])

  /* const hero=getHeroesById(heroeId); */

  /*Si el heroe no existe redireccionar a Marvel*/

  if(!jugador1){
      return <Redirect to="/"/>
  }

const handleReturn=()=>{
    if(history.length <=2){ //si la longitud del historial de navegación es menor o igual a 2
        history.push('/'); //accede 
    }else{
        history.goBack(); //history es un prop de navegación de componentes y con goBack regresamos
    }
    
}


const{
    id,
    name,
    posicion,
    dorsal,
    apodo,
    club,
    deporte,
    tiempo_club,
    edad,
    debut,
}=jugador1;
 /*  console.log(hero); */



    return (
        <div className="row mt-5">

            <div className="col-4">

                <img
                    src={`../assets/jugadores/${jugadorId}.jpg`}
                    alt={ name }
                    className="img-thumbnail card-columns " 
                />

            </div>
            <div className="col-8 ">
                <h3> { name }</h3>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><b> Club:</b> { club }</li>
                    <li className="list-group-item"><b> Posición:</b> { posicion }</li>
                    <li className="list-group-item"><b> Dorsal:</b> { dorsal }</li>
                    <li className="list-group-item"><b> Edad:</b> { edad } años</li>
                    <li className="list-group-item"><b> Apodos:</b> { apodo }</li>
                    <li className="list-group-item"><b> Año debut:</b> { debut }</li>
                    <li className="list-group-item"><b> Tiempo en el club:</b> { tiempo_club }</li>

                </ul>
                <h5>Characters</h5>
                <p>{ id }</p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Regresar
                </button>

            </div>
             
        </div>
    )
}
