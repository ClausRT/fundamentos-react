import React from 'react'

export default props =>
    <div>
        <button onClick={()=>{
            props.quandoClicar(Math.random(), "Valor Gerado: ");
        }}>Alterar</button>
    </div>