import React from 'react';
import { CgHome } from 'react-icons/cg';
import { BiDoorOpen, BiLogIn } from 'react-icons/bi';

function NavBar() {
    return (
        <menu id='NavBar'>
            <div>
                <CgHome />
                <a className='info' href="http://localhost:3000">Ínicio</a>
            </div>

            <div>
                <BiDoorOpen />
                <a className='info' href="http://localhost:3000/enter">Entrar</a>
            </div>

            <div>
                <BiLogIn />
                <a className='info' href="http://localhost:3000/login">Crie sua conta</a>
            </div>
        </menu>
    )
}

export default NavBar;