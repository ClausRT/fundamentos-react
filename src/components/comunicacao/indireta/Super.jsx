import React, {useState} from 'react'
import Sub from './Sub'

export default props => {
const [num, setNum] = useState(0);
const [texto, setTexto] = useState("Valor");

    function quandoClicar(valorGerado, texto) {
        setTexto(texto);
        setNum(valorGerado);
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub quandoClicar={quandoClicar}>Pedro</Sub>
        </div>
    )
}