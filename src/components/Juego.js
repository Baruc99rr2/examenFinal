import React, {useState} from "react";
import Imagen from "./Imagen";
import { Container, Row, Col, Button } from "react-bootstrap";
import Jugando from "./Jugando";
import Animales from "./Json/animales.json"
import Iniciando from "./Iniciando";
import Finalizando from "./Finalizando";



function Juego() {

    const [nombre, setNombre] = useState(""); // Nombre elegida al azar
    const [puntos, setPuntos] = useState(0); // puntos obtenosdps por el juegador
    const [estado, setEstado] = useState(0); // 
    const [jugadas, setJugadas] = useState(0); // 
    const [botones, setBotones] = useState([3,0,9]); // para guardar botones opciones
    const [respuesta, setRespuesta] = useState(0);
    /** cargo los audios */
    const audioGameOver = new Audio("sound/GameOver.ogg");
    const audioWinner = new Audio("sound/LevelComplete.ogg")
    const audioButton = new Audio("sound/Button.ogg")

    /** Inicializo las variables del juego */
    function inicializarJuego(valueNombre){
        setNombre(valueNombre);
        setPuntos(0);
        setEstado(1);
        let cantJugadas = Math.round(Math.random()*5) + 5;
        setJugadas(cantJugadas); 
        inicializarJugada();      
        console.log(cantJugadas);
    }
    /** Inicializo las variables de cada jugada */
    function inicializarJugada() {
        let botonesAux = [];
        botonesAux.push(Math.floor(Math.random() * (21)));
        botonesAux.push(Math.floor(Math.random() * (21)));
        botonesAux.push(Math.floor(Math.random() * (21)));
        setRespuesta(botonesAux[1]);
        botonesAux.sort(() => Math.random() - 0.5); // uso para barajar los botones
        setBotones(botonesAux);
    }

    /** Logica del Juego */
    function elegirOpcion(opcion) {
        audioButton.play();
        console.log(opcion, Animales[respuesta].key)
        if(opcion === Animales[respuesta].key){ //si hubo asiertos 
            setPuntos(puntos + 1)
            audioWinner.play();
        }else{
            audioGameOver.play();
        }
        setJugadas(jugadas - 1);
        inicializarJugada();
        if(jugadas <= 1){
            setEstado(2);
        }
    }

    function volverAJugar() {
        setEstado(0);
    }

    return(
        <>{
            (estado === 0)?
                <Iniciando manejarClick={inicializarJuego}/>
            :(estado === 1)?
                <Jugando jugadas={jugadas} respuesta={respuesta} botones={botones} manejarClick={elegirOpcion}/>
            :(estado === 2)?
                <Finalizando nombre={nombre} puntos={puntos} manejarClick={volverAJugar}/>
            :setEstado(0)
        }</>
    )
}
export default Juego;