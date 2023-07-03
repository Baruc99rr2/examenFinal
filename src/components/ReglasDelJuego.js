import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Volver from "./Volver";

export default function ReglasDelJuego(){

    return(
        <Container>
            <Row className="justify-content-md-center mb-4">
                <h1 className="text-center" > Reglas del Juego</h1>
                <p className="text-center" > Ahorcados</p>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-sm-8">
                    <h3 className="text-center">Instrucciones:</h3>
                    <p className="text-center">Usando una fila de guiones, se representa la palabra a adivinar, dando el número de letras. Si el jugador adivinador sugiere una letra que aparece en la palabra, la computadora la escribe en todas sus posiciones correctas. Si la letra sugerida no aparece en la palabra, la computadora dibuja un elemento de la figura de hombre palo ahorcado como una marca de conteo. El juego termina cuando:</p>
                    <ul>
                        <li>El jugador adivinador completa la palabra, o adivina la palabra completa correctamente.</li>
                        <li>Cuando la computadora termina de dibujar al hombre ahorcado.</li>
                    </ul>
	            </Col>                
            </Row>
            <Row className="justify-content-md-center">
                <Volver/>
            </Row>
        </Container>
    );
}