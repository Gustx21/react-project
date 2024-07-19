import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import './styles/Login.css';

function Enter() {
    return (
        <div className="body">
            <form className='login'>
                <header>
                    <h3 className='titulo'>Sign In</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni consectetur aut excepturi error obcaecati.</p>

                    <img src="../assets/react.svg" alt="Logo do React" />

                    <a href="http://localhost:3000/login">Não tem uma conta?</a>
                </header>

                <main className='form'>
                    <div>
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <MdEmail />
                    </div>
                    <div>
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                        <FaLock />
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" />
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