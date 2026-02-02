import './login.css';

function Login() {
    const loginEfetuado = true;
    const nome = 'jozelan';
    
    return (
        <>
        <div className = 'container'>
            <h2>Renderização Condicional</h2>
            {loginEfetuado && <p>Seja bem-vindo, {nome}!</p>}
            {!loginEfetuado && <p>Por favor, faça o login.</p>}
        </div>
        </>
    )
}

export default Login;