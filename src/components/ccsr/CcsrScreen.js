import React from 'react'
import { FutbolList } from '../futbolistas/FutbolList'

export const CcsrScreen = () => {
    return (
        <div>
            <div>
            <img src="./assets/jugadores/ccsr2.jpg" width="50%" height="200px"/>
            <img src="./assets/jugadores/ccsr.jpg" width="50%" height="200px"/>
            </div>
            <hr/>
            <div>
            El club CCSR <cite><b>(Club CCSR de futbol)</b></cite> de la ciudad deportiva del distrito de San Martín de Porres, Lima, del hermoso país de Perú. Este equipo está conformado, por exconfirmantes, amigos del barrio y aledaños, primos, familiares, en el que compartimos no sola una pasión sino también una tremenda amistad, basado en el fútbol. Somos un equipo que ya tiene 7 años de existencia. Participamos más de 7 veces en campeonatos, siendo 3 veces los vencedores de estos. Entre nuestras figuras estelares y que están siendo vistos por scouts de otros países tenemos a <cite><b>César Llontop Quinde</b></cite>, más conocido, como <cite>"Césarea", "Siu", "el Anillo", "Kellysuriento", etc.</cite> Este artillero en su mejor destape durante la mejor de sus temporadas (2013) se coronó como el pichichi de su barrio con 15 tantos en una temporada (incluyendo autogoles), pero hubo algo que lo marginó, fue un episodio que lo marcó; las lesiones y que sus amigos encontraron su "famosa" libretita. Desde ese momento hasta la actualidad <cite>"el gran César"</cite> no ha llegado a superar su cantidad de goles, pero igual otros países compiten para llevárselo, han llegado propuestas a las oficinas del club CCSR para generar el traspaso de este tanque,  desde <cite>"San Marino", "Luxemburgo", "Liechtenstein", "Gibraltar", "Groenlandia", "La Antartida", "Islas Samoa", "Zambia", etc.</cite>.  Entre otros jugadores qué están apunto de salir tenemos a <cite><b>Shany, a Renzon, al Bubu</b> (pintaba para ser una de las figuras de este equipo pero un tabazo de Ever lo marginó hasta la fecha), <b>a Jasson "Cazulo"</b></cite>, iniciaba como un total desconocido,  pero en su debut en el 2013 vs Medalla FC demostró su valentía aguantando dos cañonazos en la cara,
            <div className="row">
            <div className="col-7 mt-3" >
            <img src="./assets/jugadores/equipo1.jpg" className="img-thumbnail" width="100%" height="500px"/>
            </div>
            <div className="col-4 ">
          él se alejo por motivos familiares y por la relación que lo vinculaba con César, igual el club tuvo nuevos traspasos <cite><b>Diego, Martín, Alcides, Marcelo, Gruvel, Ever, Branny, Jaime</b></cite>, estos dos últimos haciéndose íntimos y jugando también en otras canchitas, que todos ya conocen. Adicional a este lista tenemos a <cite><b>Wilson, Luis, Bryan, Junior, Edson, Renzon, Cesar, Victor Espinoza, Mercado, Yahir, Adonai, Christian y nuestro querido amigo Robin</b></cite>, que fueron los iniciadores.
          <hr/>
<blockquote className="mb-0">
           <cite>"Somos una familia, que siempre buscará crecer contra todo, nunca nos dejaremos vencer facilmente, y en la cancha siempre dejaremos todo".</cite> <br></br>
            <cite className="izquierda"><b>CCSR </b></cite>
            </blockquote>
            </div>
            </div>
           


          
            </div>
            <hr />
            <FutbolList club="CCSR" />
        </div>
    )
}
