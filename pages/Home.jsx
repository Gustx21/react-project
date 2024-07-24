import NavBar from "../src/structure/NavBar";
import Header from "../src/structure/Header";
import Article from "../src/structure/Article";
import Aside from "../src/structure/Aside";
import Footer from "../src/structure/Footer";
import './styles/Home.css';

function Home() {
    return (
        <div className="home" >
            <div id="NavBar">
                <NavBar />
            </div>
            <div id="Header">
                <Header title={"React Project"} text={"React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, mantida pelo Facebook e uma comunidade de desenvolvedores individuais e empresas. Foi criada por Jordan Walke, um engenheiro de software do Facebook, e lançada em 2013. React permite a construção de aplicações web de forma eficiente e estruturada, utilizando uma abordagem baseada em componentes."}/>
            </div>
            <div id="Article">
                <Article />
            </div>
            <div id="Aside">
                <Aside />
            </div>
            <div id="Footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;