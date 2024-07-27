import React from 'react';
import './style/Footer.css';

function Footer() {
    const imagem = '../../assets/react.svg';

    return (
        <footer id='Footer'>
            <div>
                <img src={imagem} alt="Logo" />
                <h3>React Project</h3>
                <p>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit.</p>
            </div>
            
            <div class="rodape">
                <h3>Sobre Nós</h3>
                <a href="#">Nossa história</a>
                <a href="#">Jornada do Aluno</a>
                <a href="#">Certificado</a>
                <a href="#">Trabalhe Conosco</a>
                <a href="#">Canal de Privacidade</a>
            </div>

            <div class="rodape">
                <h3>Cursos</h3>
                <a href="#">Graduação</a>
                <a href="#">Pós-graduação</a>
                <a href="#">Cursos Técnicos</a>
                <a href="#">Cursos Profissionalizantes</a>
                <a href="#">Cursos Livres</a>
            </div>

            <div class="rodape">
                <h3>Ouvidoria</h3>
                <a href="#">Sou Aluno</a>
                <a href="#">Sou Candidato</a>
                <a href="#">Sou Ex-aluno</a>
                <a href="#">Fale Conosco</a>
                <a href="#">Acessibilidade</a>
                <a href="#">Biblioteca</a>
            </div>
        </footer>
    )
}

export default Footer;