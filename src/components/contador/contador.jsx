import './contador.css'
import { useState } from 'react';

function Contador(){
    const [counter, setCounter] = useState(0);

    return(
        <>
        <h1>Contador de Cliques</h1>
        <h3>Numero de Cliques:</h3>
        <p className='display'>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Clique Aqui</button>
        </>
    )
}

export default Contador;