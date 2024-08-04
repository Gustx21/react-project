import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import './styles/Login.css';

function Enter() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [checked, setCheckBox] = useState(false);

    const handleQuery = (consulta) => {
        consulta.preventDefault();

        // const user = addUser();

        window.location.href = 'http://localhost:3000/enter/start';
    }

    return (
        <div className="body">
            <form className='login' onSubmit={handleQuery}>
                <header>
                    <h3 className='titulo'>Sign In</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni consectetur aut excepturi error obcaecati.</p>

                    <img src="../assets/react.svg" alt="Logo do React" />

                    <a href="http://localhost:3000/login">Não tem uma conta?</a>
                </header>

                <main className='form'>
                    <div>
                        <input type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(email) => setEmail(email.target.value)} />
                        <MdEmail />
                    </div>
                    <div>
                        <input type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(senha) => setSenha(senha.target.value)} />
                        <FaLock />
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" checked={checked} onChange={(marked) => setCheckBox(marked.target.checked)} />
                            Lembre de mim
                        </label>
                    </div>
                    
                    <button type="submit">Entrar</button>
                </main>
            </form>
        </div>
    )
}

export default Enter;