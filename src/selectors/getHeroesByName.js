import { jugadores } from "../data/jugadores";


export const getHeroesByName = (nombre='') => {
 if(nombre==''){
     return [];
 };

 nombre=nombre.toLocaleLowerCase();
return jugadores.filter(jugador=>jugador.id.toLocaleLowerCase().includes( nombre ));



}
