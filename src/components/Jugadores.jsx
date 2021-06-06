import React from "react"
import { connect } from "react-redux"

const Jugadores = ({jugadores, agregarTitular, agregarSuplente})=> (
    <section>
        <h1>Jugadores</h1>
        <div className="contenedor-jugadores">
            {
                jugadores.map(jugador => (
                    <article className="jugador" key={jugador.id}>
                        <h3>{jugador.nombre}</h3>                      
                        <img src={jugador.foto} alt={jugador.nombre} width="300px" height="250px"/><br></br>
                        <div>
                            <button onClick={() => agregarTitular(jugador)}>Titular</button>
                            <button onClick={() => agregarSuplente(jugador)}>Suplente</button>
                        </div><br></br>  
                    </article>
                ))
            }

        </div>
    </section>
)
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(suplente){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            suplente
        })
    }    
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)