import { createStore } from "redux";


const initialState = {

    jugadores: [{
        id: 1,
        nombre: "Emiliano Martinez",
        foto: "https://images.ole.com.ar/2020/09/13/RUTa5MaJw_340x340__1.jpg"
        

    },

    {   id: 2,
        nombre: "Gonzalo Montiel",
        foto: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Argentina--v-Venezuela---International-Friendly-073c81b43fc6b7319321e78560ec9ab6.jpg"

    },
    {
        id: 3,
        nombre: "Nicolás Otamendi",
        foto:"https://argentinadorada.com.ar/img/perfiles/rXQnGMccjZRXCwLaGSi3sWIMlu1EfSJIIl5.jpg"
    

},
{        id: 4,
         nombre: "Marcos Acuña",
         foto: "https://cdn01-somosargentina.tvpublica.com.ar/wp-content/uploads/2018/06/08-Marcos-Acu%C3%B1a-min.jpg"

},
{        id: 5,
         nombre: "Angel Di María",
         foto: "https://lmdiario.com.ar/download/multimedia.normal.a87c075aa8e161fd.6469206d6172696120646f735f6e6f726d616c2e6a7067.jpg"

},
{        id: 6,
         nombre: "Lautaro Martínez",
         foto: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/11/15682132531087.jpg"

},
{
        id: 7,
        nombre:"Lionel Messi",
        foto:"https://estaticos-cdn.sport.es/clip/f92d8814-39c7-43fd-bc05-790fc38a2e22_media-libre-aspect-ratio_default_0.jpg"
},
{       id: 8,
        nombre: "Sergio Aguero",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zgvhKE0h8dxOibM1uceqvL9kqe1XOdmDdw&usqp=CAU"

},
{       id: 9,
        nombre: "Paulo Dibala",
        foto: "https://i.pinimg.com/originals/72/30/2a/72302a8f4114a9229f1a4739d8e3bb21.jpg"

},
{       id: 10,
        nombre: "Giovani Lo Celso",
        foto: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/12205749/Fotos-oficiales-Seleccion-Argentina-Mundial-Rusia-2018-20-Giovani-Lo-Celso.jpg"

},
{       id: 11,
        nombre: "Rodrigo De Paul",
        foto: "https://tntsports.com.ar/__export/1625409609999/sites/tntsports/img/2021/07/04/rodrigo_de_paul.jpg_1286959405.jpg"

},


],

    titulares: [],
    suplentes: []
}


const reducerTecnico = (state = initialState, action) => {

  if (action.type === "AGREGAR_TITULAR") {

     return {
         ...state,
         titulares: state.titulares.concat(action.jugador),
         jugadores: state.jugadores.filter (j =>j.id !== action.jugador.id)

     }
  }

   if ( action.type === "AGREGAR_SUPLENTE") {
       return{
           ...state,
           suplentes: state.suplentes.concat(action.jugador),
           jugadores: state.jugadores.filter (j =>j.id !== action.jugador.id)
       }
   }

   if ( action.type === "QUITAR_TITULAR") {
    return {
        ...state,
        titulares: state.titulares.filter(j => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
}

if ( action.type === "QUITAR_SUPLENTE") {
    return {
        ...state,
        suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
}

return state
}

export default createStore(reducerTecnico)
