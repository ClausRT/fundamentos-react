import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}><strong>João</strong></Filho>
        <Filho sobrenome={props.sobrenome}>Ana</Filho>
        <Filho sobrenome="Silvia">Marcelo</Filho>
    </div>