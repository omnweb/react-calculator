import React, {Component} from 'react'

// Exportando a classe Saudação que é extendida de componentes.
export default class Saudacao extends Component {
    state = {
        tipo : this.props.tipo,
        nome : this.props.nome
    }
    setTipo(e){
        this.setState({tipo: e.target.value}) //Alterando o estado para receber dados no <input type="text"/>
    } 
    setNome(e){
        this.setState({nome: e.target.value})
    }  
    // Função render é responsável por renderizar o componente
    render(){
        // Esperado receber 2 tipos de parâmetros, a saudação e o nome da pessoa
        // Os parâmetros estão dentro de props que não é acessível diretamente dentro de render
        // Para resolver isso usa this.props
        const {tipo, nome} = this.state // Salvando os atributos de props na constante 
        return (
            <div>
                <h1> {tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}