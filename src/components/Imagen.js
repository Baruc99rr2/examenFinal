import React from "react"
import {Col, Image } from "react-bootstrap";

export default function Imagen({nombre})
{
    return (
        <Col  xs="10" md="6" lg="4"  className="text-center rounded border border-5 border-warning">
            <Image
                variant="top" 
                className="img-fluid mt-4" 
                width="160"
                height="160"
                src={"img/" + nombre + ".png"} 
            />
        </Col>
    )
}