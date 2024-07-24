import { FaVuejs, FaYoutube } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import Content from "../../componets/Content";
import './style/Aside.css';

function Aside() {
    return (
        <aside>
            <Content title={"Informaçães correlacionadas"} />

            <div>
                <FaVuejs />
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
        </aside>
    )
}

export default Aside;