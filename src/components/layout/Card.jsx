import React from 'react'
import './Card.css'

export default props =>
    <div className="Card" style={{
        borderColor: props.color || '#000000'
    }}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{
            backgroundColor: props.color || '#000000'
        }}>
            {props.titulo}
        </div>
    </div>