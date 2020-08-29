import React, { useState } from 'react'

export default props => {
    const [numeros, setNumeros] = useState(Array(props.tamanho).fill(0));

    function gerarNumeroUnico (array) {
        let novoNumero = parseInt(Math.floor(Math.random() * 59) + 1);
        console.log(novoNumero)
        return array.includes(novoNumero) ? gerarNumeroUnico(array) : novoNumero;
    }

    function sortear() {
        const novosNumeros = Array(props.tamanho)
            .fill(0)
            .reduce(previousValue => [...previousValue, gerarNumeroUnico(previousValue)], [])
            .sort((a, b) => a - b);

        setNumeros(novosNumeros);
    }

    return <>
        <h3>Mega Sena Idiota</h3>
        <h4>{numeros.join("  ")}</h4>
        <button onClick={sortear}>Gerar Numeros</button>
    </>
}