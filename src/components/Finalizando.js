import React, {useState} from "react";
import Imagen from "./Imagen";
import { Container, Row, Col, Button } from "react-bootstrap";

function Finalizando({nombre, puntos, manejarClick}) {

    return(
        <Container>
            <Row className="justify-content-center">
            <h1 className="text-center" > Jugador: {nombre} </h1>
            <h2 className="text-center" > Puntaje: {puntos} </h2>
            </Row>
            <Row className="justify-content-center text-center">
                <Imagen 
                    nombre="gameOver" 
                />
                <h2> </h2>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" md="8" lg="6" className="">
                    <Row className="justify-content-center">
                        <Button 
                            //pinto verde
                            variant = {'success'}
                            //desactivo la opcion si fue apretada o el contador es mayor que 5
                            style={{width: "200px", height: "40px", margin: "2px",}}
                            onClick={() => manejarClick()}>Volver a Jugar 
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Finalizando;