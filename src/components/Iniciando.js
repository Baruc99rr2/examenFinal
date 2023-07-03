import React, {useState} from "react";
import Imagen from "./Imagen";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

function Iniciando({manejarClick}) {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value);
    };
  
  
    return(
        <Container>
            <Row className="justify-content-center">
                <h1 className="text-center" > Ingresa tu Nombre </h1>
            </Row>
            <Row className="justify-content-center text-center">
                <Imagen 
                    nombre="inicioJuego" 
                />
                <label>
                Nombre:
                <input type="text" value={value} onChange={handleChange} />
                </label>

            </Row>
            <Row className="justify-content-center">
                <Col xs="12" md="8" lg="6" className="">
                    <Row className="justify-content-center">
                        <Button 
                            //pinto verde
                            variant = {'success'}
                            //desactivo la opcion si fue apretada o el contador es mayor que 5
                            style={{width: "200px", height: "40px", margin: "2px",}}
                            onClick={() => manejarClick(value)}>Iniciar Juego 
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Iniciando;