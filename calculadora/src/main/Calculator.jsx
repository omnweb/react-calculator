import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

// Definindo estado inicial da calculadora
const initialState = {
    displayValue: '0', // Valor inicial a ser exibido no display
    clearDisplay: false, // Propriedade para poder verificar se ele precisa ou não limpar o display
    operation: null, // Variável que vai armazenar a operação
    values: [0, 0],  // Array com dois valores para que ele limpe o display para colocar o proximo numero apos digitar um operador
    current: 0 // Vai dizer qual valor atual do índice do array está dendo alterado
}

// Criando a classe Calculator
export default class Calculator extends Component {
    // Recebendo o estado inicial da calculadora
    state = { ... initialState}
    //Reselvendo o problema do this dentro da função arrow usando bind
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    // Função para zerar a calculadora
    clearMemory() {
        this.setState({ ...initialState })
    }

    // Função para inserir a operação Matemáica
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current:1, clearDisplay: true})
        }else{
            // Se cair aqui é porque já possui uma operação setada
            const equals = operation === '='
            const currentOperation = this.state.operation

            // Clonando o values
            const values = [...this.state.values]

            // Em currentOperations ele salva o sinal da operação em os valores da operação em value 1 e 2
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    // Adicionar dígito

    addDigit(n){
        if (n === '.' && this.state.displayValue.includes('.')) {
            // Se no display já estiver incluído um ponto, ele será ignorado
            return
        }
        // Limpando o dígito zero do display quando for acrescentado outro dígito ou qdo clearDisplay == true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay 

        //Constante que recebe os dígitos caso clearDisplay for falso
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //Recebe o novo valor a ser colocado no display
        const displayValue = currentValue + n

        // Setando o valor na aplicação
        this.setState({displayValue, clearDisplay: false})

        // Pegando os números para realizar as operações

        if(n!== '.'){
            //Se for diferente de ponto é um número
            const i  = this.state.current
            // Transformando dígito que está em formato caracter
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] // Clonando para um novo array
            values[i] = newValue
            // Add valor no estado do objeto
            this.setState({ values })
        }
        
    }

    // Função que denderiza a calculadora
    render() {
        //Função necessita de um retorno
        return(
            // Retornando uma expressão
            <div className="calculator">
                {/* Dentro de jsx a class se torna className, pois class é reservada pela linguagem*/}
                <Display value={this.state.displayValue}/>
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