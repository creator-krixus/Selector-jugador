import {createStore} from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Falcao",
            foto: "https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2018-09/falcao_garcia_afp_10_0.jpg?itok=oL9NvhtA"
        },
        {
            id: 2,
            nombre: "James",
            foto: "https://as01.epimg.net/colombia/imagenes/2019/07/12/futbol/1562896782_882295_1562897146_noticia_normal_recorte1.jpg"
        },
        {
            id: 3,
            nombre: "Juan Guillermo cuadrado",
            foto: "https://files.antena2.com/antena2/public/styles/imagen_despliegue/public/2019-11/juan_g_opt_1_0.jpg?itok=JApVHj1G"
        },
        {
            id: 4,
            nombre: "David ospina",
            foto: "https://zonacero.com/sites/default/files/styles/1260x720/public/2018/7/03/foto_detalle/david_opsina.jpg?itok=XXgp0JHk"
        },
        {
            id: 5,
            nombre: "Santiago Arias",
            foto: "https://images.daznservices.com/di/library/GOAL/35/7c/santiago-arias-colombia_pa12wpneubpd1lc2aerr4ld4b.jpg?t=2020383468&w=1920&h=1080"            
        },
        {
            id: 6,
            nombre: "Yerry Mina",
            foto: "https://images.daznservices.com/di/library/GOAL/e7/2f/yerry-mina-colombia-2018_wrmzpuvgmrzs1ld5364fkaku1.jpg?t=1711591852&quality=60&w=1200&h=800"
        },
        {
            id: 7,
            nombre: "Carlos Sanchez",
            foto: "https://www.elpais.com.co/files/article_main/uploads/2017/03/23/58d43e96463ad.jpeg"
        },
        {
            id: 8,
            nombre: "Davinson sanchez",
            foto: "https://balonlatino.net/wp-content/uploads/2019/08/DS1.jpg"
        },
        {
            id: 9,
            nombre: "Mario Alberto Yepez",
            foto: "https://www.elcincocero.com/images/Articulos/Mi_seleccion/Seleccion/2015/12_Diciembre/02_DefensasSeleccion/galeria_DefensasColombia_08.jpg"
        },
        {
            id: 10,
            nombre: "Wilmar Barrios",
            foto: "https://www.elpais.com.co/files/article_main/files/crop/uploads/2018/06/20/5b2b045dcc5ae.r_1529554061032.0-122-1333-925.jpeg"
        },
        {
            id: 11,
            nombre: "Juan Fernando Quintero",
            foto: "https://cloudfront-us-east-1.images.arcpublishing.com/semana/ULJC6HCAEZBBFN37ZKHVTO757U.jpg"
        }

    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state =  initialState, action) => {
    
    if (action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
        }
    }
    else if (action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.suplente),
            jugadores: state.jugadores.filter(suplente => suplente.id !== action.suplente.id)
        }
    }
    else if (action.type === "QUITAR_JUGADOR"){
        return {
            ...state,
            suplentes: state.suplentes.filter(suplente => suplente.id !== action.suplente.id),
            jugadores: state.jugadores.concat(action.suplente)
        }
    }
    else if (action.type === "PONER_JUGADOR"){
        return {
            ...state,
            titulares: state.titulares.filter(titular => titular.id !== action.titular.id),
            jugadores: state.jugadores.concat(action.titular)
        }
    }    

    return state
}

export default createStore(reducerEntrenador)