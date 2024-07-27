import { FaAngular, FaAws } from "react-icons/fa";
import { DiGithub, DiRuby } from "react-icons/di";
import Content from "../../componets/Content";
import Text from "../../componets/Text"
import './style/Aside.css';

function Aside() {
    return (
        <aside id="Aside">
            <Content title={"Informaçães sobre Vagas para Dev's"} />

            <Text icon={<FaAws />} text={'Empresa está com vagas abertas para Analista Programador Drupal/AWS. A posição é remota e em tempo integral.'} />

            <Text icon={<DiRuby />} text={'Empregos e Consultoria Brasil: Essa empresa também tem uma vaga para Programador Full Stack Ruby, em regime remoto e tempo integral.'} />
            
            <Text icon={<DiGithub />} text={'GitHub - frontendbr/vagas: Este repositório no GitHub é específico para a postagem de vagas de front-end. Você pode encontrar oportunidades para desenvolvedores front-end, incluindo vagas relacionadas a JavaScript e Angular.'}/>

            <Text icon={<FaAngular />} text={'A plataforma Turing oferece mais de 100 vagas para desenvolvedores Angular.'}/>
        </aside>
    )
}

export default Aside;