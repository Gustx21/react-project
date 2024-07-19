import './style/NavBar.css';

function NavBar() {
    const imagem = '../../vite.svg';

    return (
        <menu>
            <img src={imagem} alt="Logo" className="logo" />

            <a className='info' href="http://localhost:3000">Ínicio</a>
            <a className='info' href="https://linkedin.com/in/Gustx21" target='_blank'>Tutoria online</a>
            <a className='info' href="mailto://gugamathiaz12@gmail.com" target='_blank'>Contatos</a>

            <div>
                <a href="http://localhost:3000/login"><button className='btn'>Crie sua conta</button></a>
                <a href="http://localhost:3000/enter"><button className='btn'>Entrar</button></a>
            </div>
        </menu>
    )
}

export default NavBar;