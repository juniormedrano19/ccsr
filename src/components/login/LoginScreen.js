import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { type } from '../../types/type'

export const LoginScreen = ( { history } ) => {

const {dispatch} = useContext(AuthContext)


    /*en Herramienta de desarrollador nos ubicamos en componentes y desestructuramos en las props history */

    const handleLogin=()=>{

        const lastPath= localStorage.getItem('lastPath') || '/';
       /*  history.push('/'); */ // me redirige a marvel porque cualquier ruta no establecida siempre inicia en marvel
  //pero cuando le doy  atrás vuelve a aparecer el login
   
 /*  history.replace('/'); */ //guarda el historico y lo reemplaza y al volver atrás ya no aparece login
   //la única diferencia es que navega sin presionar una nueva entrada en el historial, como su nombre indica, reemplaza la entrada actual.
    //reemplazar en la historia

    //Llamo al dispatch desde el contexto agregando en el payload el nombre
    
    dispatch({
        type:type.login,
        payload:{
            name:'Junior',
        }
    });
    history.replace(lastPath);
}

    return (
        <div className="container mt-5">
             <h1>Login</h1>
             <hr />

             <button
             className="btn btn-primary"
             onClick={ handleLogin }
             >
                Login
             </button>
        </div>
    )
}
