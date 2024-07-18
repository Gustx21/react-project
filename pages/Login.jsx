import { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './styles/Login.css';

function Login() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = { nome, email, senha };

        console.log(newUser)

        // addUser(newUser);
        // setNome('');
        // setEmail('');
        // setSenha('');
    };

    return (
        <div className="body">         
            <form className='login' onSubmit={handleSubmit}>
                <header >
                    <h3 className="titulo">Sign Up</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni consectetur aut excepturi error obcaecati.</p>

                    <img src="../assets/react.svg" alt="Logo do React" />

                    <a href="http://localhost:3000/enter">Já tem uma conta?</a>
                </header>

                <main className="form">
                    <div>
                        <input type="text" name="nome" id="nome" placeholder="Nome Completo" value={nome} onChange={(nome) => setNome(nome.target.value)} />
                        <FaUser />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(email) => setEmail(email.target.value)} />
                        <MdEmail />
                    </div>
                    <div>
                        <input type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(senha) => setSenha(senha.target.value)} />
                        <FaLock/>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                    </div>
                    
                    <button type="submit">Cadastrar</button>
                </main>
            </form>
        </div>
    )
}

export default Login;