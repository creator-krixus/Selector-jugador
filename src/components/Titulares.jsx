import React from "react"
import { connect } from "react-redux"


const Titulares = ({titulares, quitarJugador}) => (
    <section>
        <h2>Titulares</h2>
        <div className="contenedor-titulares">
            {
                titulares.map(titular => (
                    <article className="titular" key={titular.id}>
                        <div>
                            <h3>{titular.nombre}</h3>                      
                            <img src={titular.foto} alt={titular.nombre} width="300px" height="250px"/><br></br>
                            <button className="btn-restablecer" onClick={()=>{quitarJugador(titular)}}>Regresar a la lista</button>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
    quitarJugador(titular){
        dispatch ({
            type: "PONER_JUGADOR",
            titular
        })
    }    

})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)