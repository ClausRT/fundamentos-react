import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import MegaSena from './components/mega-sena/MegaSena'

export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#10 - Mega Sena" color="#8bd191">
                <MegaSena tamanho={8} />
            </Card>
            <Card titulo="#09 - Contador" color="#91d18b">
                <Contador passo={10} valor={100} />
            </Card>
            <Card titulo="#08 - Formulário" color="#e11d74">
                <Input />
            </Card>
            <Card titulo="#07 - Comunicação Indireta" color="#ffc93c">
                <Super />
            </Card>
            <Card titulo="#06 - Comunicação Direta" color="#E67064">
                <Pai sobrenome="Freitas" />
            </Card>
            <Card titulo="#05 - Condicional" color="#440047">
                <Condicional numero={10} />
                <Condicional numero={11} />
            </Card>
            <Card titulo="#04 - Repetição" color="#155A83">
                <Repeticao />
            </Card>
            <Card titulo="#03 - Componente com Fliho" color="#81b214">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parametro" color="#4e89ae">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
                <ComParametro titulo="Opa" subtitulo="Epa" />
            </Card>
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>