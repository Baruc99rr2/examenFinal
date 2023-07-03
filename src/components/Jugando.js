import React, {useState} from "react";
import Imagen from "./Imagen";
import { Container, Row, Col, Button } from "react-bootstrap";
import Animales from "./Json/animales.json"


function Jugando({jugadas, respuesta, botones, manejarClick}) {

    return(
        <Container>
            <Row className="justify-content-center">
                <h1 className="text-center" > Jugadas restantes: {jugadas} </h1>
            </Row>
            <Row className="justify-content-center text-center">
                <Imagen 
                    nombre={Animales[respuesta].imagen} 
                />
                <h2> </h2>
            </Row>
            <Row className="justify-content-center">
                <Col xs="12" md="8" lg="6" className="">
                    <Row className="justify-content-center">
                        {botones.map((opcion, index) =>
                            <Button 
                                key={index} 
                                //pinto verde
                                variant = {'success'}
                                //desactivo la opcion si fue apretada o el contador es mayor que 5
                                disabled = {jugadas <= 0? true: false}
                                style={{width: "200px", height: "40px", margin: "2px",}}
                                onClick={() => manejarClick(Animales[opcion].key)}>{Animales[opcion].nombre} 
                            </Button>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Jugando;