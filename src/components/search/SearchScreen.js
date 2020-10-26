import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { FutbolCard } from '../futbolistas/FutbolCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../../hooks/useForm';


export const SearchScreen = ({history}) => {
//se instaló el paquete npm querystring
   const location=useLocation(); //nos muestra el location de nuestra página
  /*  console.log(location.search); */ //me muestra el query del location
  console.log(queryString.parse(location.search)); // me muestra el queryString.parse(location.search)) en un objeto

//si es undefined lo toma como un string ''
 const {q='' }= queryString.parse(location.search)
 const  [values, handleInputChange, reset] = useForm({
    searchText:q,
})

const {searchText}=values;

   
/* const jugadoresFiltered=jugadores; */

const jugadoresFiltered=useMemo(() => getHeroesByName(q), [q])

console.log(jugadoresFiltered);
  

const handleSearch=(e)=>{
e.preventDefault();
/*  console.log(search); */
history.push(`?q=${ searchText }`);

}



    return (
        <div>
        <h1>Buscar</h1>
        <hr />

        <div className="row">
        <div className="col-5">

        <h4> Búsqueda </h4>
        <hr />
        <form onSubmit={handleSearch}>
        <input 
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Buscar a un CCSR"
        autoComplete="off"
        />
        <button
        type="submit"
        className="btn mt-1 btn-block btn-outline-primary"
        >
        Search...
        </button>

        </form>

        </div>
        <div className="col-7">
            <h4>Results: {jugadoresFiltered.length>1?`${jugadoresFiltered.length} coincidencias`:`${jugadoresFiltered.length} coincidencia`}</h4>
            <hr />

           {
               (q==='') &&
            <div className="alert alert-info">
                Buscar un jugador CCSR
            </div>
           } 
           {
               (q !=='' && jugadoresFiltered.length ===0) &&
            <div className="alert alert-danger">
                No es un jugador CCSR:  { q }
            </div>
           } 



            {
                jugadoresFiltered.map(jugador=>(
                    <FutbolCard
                        key={ jugador.id}
                        { ...jugador }
                    />
                ))
            }
        </div>

        </div>

        </div>
    )
}
