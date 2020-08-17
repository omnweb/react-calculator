import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'


// Criando a classe Calculator
export default class Calculator extends Component {
    //Reselvendo o problema do this dentro da função arrow usando bind

    constructor (props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // Função para zerar a calculadora
    clearMemory(){
        console.log('limpar');
    }

    // Função para inserir a operação Matemáica
    setOperation(operation){
        console.log(operation);
    }

    // Adicionar dígito

    addDigit(n){
        console.log(n);
    }

    // Função que denderiza a calculadora
    render() {
        //Função necessita de um retorno
        return(
            // Retornando uma expressão
            <div className="calculator">
                {/* Dentro de jsx a class se torna className, pois class é reservada pela linguagem*/}
                <Display value="100"/>
                <Button label="AC" click={this.clearMemory} triple/>                
                <Button label="/" click ={this.setOperation} operation/>                
                <Button label="7" click ={this.addDigit}/>               
                <Button label="8" click ={this.addDigit}/>                
                <Button label="9" click ={this.addDigit}/>                
                <Button label="*" click ={this.setOperation} operation/>          
                <Button label="4" click ={this.addDigit}/>               
                <Button label="5" click ={this.addDigit}/>                
                <Button label="6" click ={this.addDigit}/>               
                <Button label="-" click ={this.setOperation} operation/>              
                <Button label="1" click ={this.addDigit}/>                
                <Button label="2" click ={this.addDigit}/>                
                <Button label="3" click ={this.addDigit}/>                
                <Button label="+" click ={this.setOperation} operation/>              
                <Button label="0" click ={this.addDigit} double/> 
                <Button label="." click ={this.addDigit} />   
                <Button label="=" click ={this.setOperation} operation/>            
                
            </div>
        )
    }
}