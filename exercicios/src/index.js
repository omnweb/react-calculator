import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'


// Colocando elemento na página

// ReactDOM.render(<Primeiro/>, document.getElementById('root')) 
// ReactDOM.render(<BomDia nome="Ovidio"/>, document.getElementById('root')) 

// importando multiplos componentes Aula 2

// import mult, {BoaNoite} from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <mult.BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>    
// , document.getElementById('root'))

// Importando Saudacao

import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>       
    </div>    
, document.getElementById('root'))
