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
                <Header />
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