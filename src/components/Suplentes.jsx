import React from "react"
import { connect } from "react-redux"


const Suplentes = ({suplentes, quitarJugador}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="contenedor-suplentes">
            {
                suplentes.map(suplente => (
                    <article className="suplente" key={suplente.id}>
                        <div>
                            <h3>{suplente.nombre}</h3>                      
                            <img src={suplente.foto} alt={suplente.nombre} width="300px" height="250px"/><br></br>
                            <button className="btn-restablecer" onClick={()=>quitarJugador(suplente)}>Regresar a la lista</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarJugador(suplente){
        dispatch ({
            type: "QUITAR_JUGADOR",
            suplente
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)