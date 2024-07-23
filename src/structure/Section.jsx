import { FaHtml5, FaNpm, FaReact, FaNodeJs } from "react-icons/fa";
import './style/Section.css';

function Section() {
    return (
        <section className="areas">
            <span>
                <FaHtml5 />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea expedita numquam maxime iste temporibus ad, minus voluptas hic, ullam laudantium iure repudiandae quis, amet aliquid eius. Obcaecati, a magnam.</p>
            </span>
            <span>
                <FaNodeJs />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea expedita numquam maxime iste temporibus ad, minus voluptas hic, ullam laudantium iure repudiandae quis, amet aliquid eius. Obcaecati, a magnam.</p>
            </span>
            <span>
                <FaReact />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea expedita numquam maxime iste temporibus ad, minus voluptas hic, ullam laudantium iure repudiandae quis, amet aliquid eius. Obcaecati, a magnam.</p>
            </span>
            <span>
                <FaNpm />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea expedita numquam maxime iste temporibus ad, minus voluptas hic, ullam laudantium iure repudiandae quis, amet aliquid eius. Obcaecati, a magnam.</p>
            </span>
        </section>
    )
}

export default Section;