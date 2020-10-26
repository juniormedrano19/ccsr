import {jugadores} from '../data/jugadores'

export const getHeroesByClub = (club) => {

    const validClub=['CCSR', 'Perú'];
    if(!validClub.includes(club)){
        throw new Error(`Club ${club} no es correcto`);
    }

    return jugadores.filter(jugador=>jugador.club===club);

   
}
