import React from 'react';
import {Button} from 'bootstrap';
  
const Boton = ({disable, manejarClick, children}) => {
  return (
    <button className="btn" 
        style={{width: "40px", height: "40px", margin: "4px",}}
        onClick={() => manejarClick(children)}>{children} {disable}
    </button>
   );
}
  
export default Boton;

