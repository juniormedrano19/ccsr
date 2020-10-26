import React, { useContext } from 'react';
import { Link, NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { type } from '../../types/type';


export const Navbar = () => {
      //no podemos usar como props aquí el history porque nos devuelve undefined debido a que no está en una ruta
    //entonces usamos el hook useHistory
    const history= useHistory();

    //Del contexto envío el usuario 
    const {user:{name}, dispatch} = useContext(AuthContext)
    /* console.log(name); */ // me muestra el valor de la propiedad name
    
    const handleLogout=()=>{
    history.replace('/login'); //nos ubicamos a la ruta indicada
    dispatch({
        type:type.logout,
    })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/ccsr"
                    >
                        CCSR
                    </NavLink>

                {/*     <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/peru"
                    >
                       Selección Peruana
                    </NavLink> */}
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                       Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <span
                className="nav-item nav-link text-info"
                >Junior
                </span>
                    <button
                       
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}