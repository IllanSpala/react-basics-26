import './contadorCaracter.css'
import { useState } from 'react';

function ContadorCaracter(){
    const [text, setText] = useState('');
    
    return(
        <>
        <h1>Contador de Caracteres</h1>
        <input id='inputText' type='text' onChange={(e) => setText(e.target.value)} />
        <p className='showText'>{text}</p>
        <p className='display'>Número de Caracteres: {text.length}</p>
        </>
    )
}

export default ContadorCaracter;