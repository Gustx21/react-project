import React from 'react';
import { CgHome } from 'react-icons/cg';
import './style/NavBar.css';

function NavBar() {
    return (
        <menu id='NavBar'>
            <div>
                <CgHome />
                <a className='info' href="http://localhost:3000">Ínicio</a>
            </div>

            <a href="http://localhost:3000/enter"><button className='btn'>Entrar</button></a>
            <a href="http://localhost:3000/login"><button className='btn'>Crie sua conta</button></a>
        </menu>
    )
}

export default NavBar;