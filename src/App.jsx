import React from 'react'
import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default props =>
    <div className="App">
        <Card titulo="#05 - Condicional">
            <Condicional numero={10} />
            <Condicional numero={11} />
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#03 - Componente com Fliho">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>