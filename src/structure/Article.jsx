import { useState, useEffect } from 'react';
import Content from '../../componets/Content';
import Section from './Section';
import Header from './Header';
import './style/Article.css';

function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/comments')
            .then(response => response.json())
            .then(json => { setArticles(json) })
            .catch(error => console.error(error))
    }, [articles]);

    return (
        <article>
            <Header title={"As variações de linguagem de programação"} text={"Este é um parágrafo introdutório descreve sobre o assunto de variedades nas liguagem de programação e seus benefícios. Nele, podemos falar sobre a importância do tema e o que será abordado."} />

            {articles.map((article) => {
                return <Content title={`Seção ${article.id}: ${article.title}`} text={article.body} />
            })}

            <Section/>
        </article>
    )
}

export default Article;