import { FaHtml5, FaNpm, FaReact, FaNodeJs } from "react-icons/fa";
import '../src/structure/style/Section.css';

function Card() {
    return (
        <section className="areas">
            <div className="cards">
                <FaHtml5 />
                <h4>Quantidade de linguagens</h4>
                <p>Estima-se que existam mais de <mark>1150 linguagem de programação</mark> desenvolvidas até hoje. Cada uma foi projetada com propósitos específicos, e os desenvolvedores escolhem a mais adequada para cada projeto.</p>
            </div>
            <div className="cards">
                <FaNodeJs />
                <h4>Dia do programador</h4>
                <p>O <em>Dia do Programador</em> é comemorado em 12 de setembro. Uma data especial para homenagear aqueles que criam e mantêm o código que impulsiona a tecnologia e a inovação.</p>
            </div>
            <div className="cards">
                <FaReact />
                <h4>Programadores pedem ajuda</h4>
                <p>Curiosamente, programadores muitas vezes demoram para pedir ajuda quando enfrentam problemas. Isso pode ser atribuído ao formato de aprendizado, que incentiva a tentativa e erro.</p>
            </div>
            <div className="cards">
                <FaNpm />
                <h4>Diversidade de linguagens no Brasil</h4>
                <p>Embora programadores conheçam, em média, de 30 a 50 linguagens de programação, estima-se que mais de 1500 linguagens já tenham sido desenvolvidas.</p>
            </div>
        </section>
    )
}

export default Card;