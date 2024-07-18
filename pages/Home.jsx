import NavBar from "../src/componets/NavBar";
import Section from "../src/componets/Section";
import Article from "../src/componets/Article";
import Aside from "../src/componets/Aside";
import Footer from "../src/componets/Footer";
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