import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/button'


// Criando a classe Calculator
export default class Calculator extends Component {
    // Criando a função de renderização
    render() {
        //Função necessita de um retorno
        return(
            // Retornando uma expressão
            <div className="calculator">
                {/* Dentro de jsx a class se torna className, pois class é reservada pela linguagem*/}
                <Button label="AC"/>                
                <Button label="/"/>                
                <Button label="7"/>                
                <Button label="8"/>                
                <Button label="9"/>                
                <Button label="*"/>                
                <Button label="4"/>                
                <Button label="5"/>                
                <Button label="6"/>                
                <Button label="-"/>                
                <Button label="1"/>                
                <Button label="2"/>                
                <Button label="3"/>                
                <Button label="+"/>                
                <Button label="0"/>                
                <Button label="."/>                
                <Button label="="/>                
                
            </div>
        )
    }
}