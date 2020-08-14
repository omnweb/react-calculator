import React from 'react'
import { childrenWithProps } from '../utils/utils'
// import Filho from './Filho'

// export default props => 
//     <div>
//         <h1>{props.nome} {props.sobrenome}</h1>
//         <h2>Filhos</h2>
//         <ul>
//             {/* <Filho nome="João" sobrenome= {props.sobrenome}/> */}
//             {/* <Filho {... props}/> Usando spread "..." para passar todas as propriedades do pai para o filho */}
//             {/* <Filho {... props} nome="Luiza" /> Sobrescrevendo a propriedade nome herdada do pai com o nome carla */}

//             {/* PASSANDO OS FILHOS DIRETO NA CHAMADA, usei a tag abaixo */}

                       
//         </ul>
//     </div>

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
