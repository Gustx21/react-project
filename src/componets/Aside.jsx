import { FaVuejs, FaDev, FaYoutube, FaYahoo, FaYarn } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaCss3 } from "react-icons/fa6";
import './style/Aside.css';

function Aside() {
    return (
        <aside>
            <h3>Informações Correlacionadas</h3>

            <div>
                <FaCss3 />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugiat aperiam molestiae corrupti, provident possimus soluta! Atque harum doloribus, qui, provident dolore recusandae tempora maxime mollitia blanditiis et odio autem?</p>
            </div>

            <div>
                <FaVuejs />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugiat aperiam molestiae corrupti, provident possimus soluta! Atque harum doloribus, qui, provident dolore recusandae tempora maxime mollitia blanditiis et odio autem?</p>
            </div>

            <div>
                <FaDev />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugiat aperiam molestiae corrupti, provident possimus soluta! Atque harum doloribus, qui, provident dolore recusandae tempora maxime mollitia blanditiis et odio autem?</p>
            </div>

            <div>
                <FaYoutube />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit pariatur aspernatur aliquam repellat rem tenetur libero numquam saepe officia optio porro eaque vitae, mollitia facilis repudiandae ipsa. Quaerat, vitae.</p>
            </div>

            <div>
                <DiJavascript />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nostrum porro dignissimos quis, voluptatem doloribus repudiandae corporis perferendis mollitia quae veritatis qui unde nesciunt cumque ullam? Laborum accusamus voluptatem nesciunt!</p>
            </div>

            <div>
                <FaYarn />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est expedita ex odit? Distinctio excepturi unde sint doloribus, beatae sed repellat facilis sequi aut dolorum magnam mollitia quae voluptatem ab?</p>
            </div>
        </aside>
    )
}

export default Aside;