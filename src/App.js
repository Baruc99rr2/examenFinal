import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageError from "./components/PageError";
import Juego from "./components/Juego";


function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Juego/>} />
            <Route path="*" element={<Juego/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;