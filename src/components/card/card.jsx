import './card.css'
    //UTILIZANDO PROPS E EXPRESSÕES NO JSX
function Card(  ){
    const nome = 'jozelan';
    const idade = 21;
    const dobro = (n) => n * 2;
    
    return(
        <>
        <div className='container'>
            <h2>Expressões no JSX
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>Dobro da Idade: {dobro(idade)}</p>
                <p>Idade daqui a 5 anos: {idade + 5}</p>
            </h2>
        </div>
        </>
    )
}

export default Card;