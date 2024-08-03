import React from 'react';
import { CgHome } from 'react-icons/cg';
import { BiDoorOpen, BiLogIn } from 'react-icons/bi';

function NavBar() {
    return (
        <menu id='NavBar'>
            <nav>
                <CgHome />
                <a className='info' href="http://localhost:3000">Ínicio</a>
            </nav>

            <nav>
                <BiDoorOpen />
                <a className='info' href="http://localhost:3000/enter">Entrar</a>
            </nav>

            <nav>
                <BiLogIn />
                <a className='info' href="http://localhost:3000/login">Crie sua conta</a>
            </nav>
        </menu>
    )
}

export default NavBar;