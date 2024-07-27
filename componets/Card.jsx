import { FaHtml5, FaNpm, FaReact, FaNodeJs } from "react-icons/fa";
import '../src/structure/style/Section.css';

function Card({ title, text }) {
    return (
        <div className="cards">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Card;