import React from 'react';
import { FaHtml5, FaNpm, FaReact, FaNodeJs } from "react-icons/fa";
import Card from "../../componets/Card";
import Video from "../../componets/Video";

function Section() {
    return (
        <section id="Section">
            <Video />

            <section className="areas">
                <Card icon={<FaHtml5 />} title={'Quantidade de linguagens'} text={'Estima-se que existam mais de 1150 linguagem de programação desenvolvidas até hoje. Cada uma foi projetada com propósitos específicos, e os desenvolvedores escolhem a mais adequada para cada projeto.'} />

                <Card icon={<FaNpm />} title={'Dia do programador'} text={'O Dia do Programador é comemorado em 12 de setembro. Uma data especial para homenagear aqueles que criam e mantêm o código que impulsiona a tecnologia e a inovação.'}/>

                <Card icon={<FaReact />} title={'Programadores pedem ajuda'} text={'Curiosamente, programadores muitas vezes demoram para pedir ajuda quando enfrentam problemas. Isso pode ser atribuído ao formato de aprendizado, que incentiva a tentativa e erro.'}/>
                
                <Card icon={<FaNodeJs />} title={'Diversidade de linguagens no Brasil'} text={'Embora programadores conheçam, em média, de 30 a 50 linguagens de programação, estima-se que mais de 1500 linguagens já tenham sido desenvolvidas.'}/>
            </section>
        </section>
    )
}

export default Section;