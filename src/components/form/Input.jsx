import React, { useState } from "react";

export default props => {
    let [nome, alterarNome] = useState("Pedro");

    return (
        <>
        <h3>{nome}</h3>
        <input type="text" value={nome} onChange={event => alterarNome(event.target.value)}/>
        </>
    )
}