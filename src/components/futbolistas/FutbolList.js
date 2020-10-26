import React, { useMemo } from 'react'
import { getHeroesByClub } from '../../selectors/getHeroesByClub'
import { FutbolCard } from './FutbolCard'

export const FutbolList = ({club}) => {
   //memorizar el heroe y ejecutar la función cada vez que cambia el publisher
   const jugador1=useMemo(() => getHeroesByClub( club ), [ club ]);
   let suma =0;
   /*  const heroes=getHeroesByPublisher( publisher ); */
let promedio;
/* para crear tarjetas en bootstrap usar card-columns */
    return (

        <div>
        {
            jugador1.map(prueba=>{
                if(prueba.id==='raulre'){
                    return;
                }
                suma=suma+prueba.edad;
                promedio= suma/(jugador1.length-1);
                
            }
           )
        }
        <div className="prueba">  <h3><b>Promedio de edad CCSR</b>: {promedio.toFixed(2)} años</h3>
        <hr />
        </div>
      
        <div className="card-columns">
            {
                /*el spread de ...hero trae todo */
                
                jugador1.map(juga=>(
                    <FutbolCard
                    key={juga.id}
                    {...juga }
                    />
                        
                    
                ))
            }
        </div>
        <div className="prueba1">
        <h3>Total</h3>
        <div className="prueba2"> <h4><b>Número de jugadores</b>: {jugador1.length -1}</h4>
        <h4><b>Director Técnico</b>: 1</h4>
        <h4><b>Parte Legal</b>: 1</h4></div>
        
       
        <hr />
        </div>
        </div>
    )
        }