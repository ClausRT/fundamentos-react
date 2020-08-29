import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0
        };
    }

    /* 
      Ao invés de usar um construtor, daria para fazer isso:

        state = {
            passo: this.props.passo,
            valor: 0
        }

      Afinal o props está disponivel em qualquer parte de um componente
    */

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    onPassoChange = value => {
        this.setState({ passo: value })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                
                <PassoForm passo={this.state.passo} onPassoChange={this.onPassoChange} />
                <Display valor={this.state.valor} />
                <Botoes inc={this.inc} dec={this.dec} />
            </div>
        )
    }
}