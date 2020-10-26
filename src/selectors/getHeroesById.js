import { jugadores } from "../data/jugadores"


export const getHeroesById = (id) => {

   return jugadores.find(jugador=>jugador.id === id);
   
}
