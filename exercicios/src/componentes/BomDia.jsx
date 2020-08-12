import React from 'react'
// import React, {Fragment} from 'react' // Import Frgment para usar <Fragment></Fragment> ao invés de <React.Fragment></React.Fragment>

// export default props =>  
// <React.Fragment>
//     <h1>Bom dia {props.nome}</h1>
//     <h2 >Seja bem vindo!</h2>
// </React.Fragment>

// Podese utilizar tbm um array para envolver os elementos
// export default props => [
//     <h1 key="h1">Bom dia {props.nome}</h1>,
//     <h2 key="h2">Seja bem vindo!</h2>
// ]

// Ou usar uma div

export default props =>
<div>
    <h1 >Bom dia {props.nome}!</h1>
    <h2 >Seja bem vindo!</h2>
</div>


