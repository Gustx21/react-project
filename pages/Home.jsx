import NavBar from "../src/structure/NavBar";
import Section from "../src/structure/Section";
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
            <div id="Article">
                <Article />
            </div>
            <div id="Section">
                <Section />
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