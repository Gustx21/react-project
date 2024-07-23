import { useState, useEffect } from 'react';
import Content from '../../componets/Content';
import Section from './Section';
import './style/Article.css';

function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => { setArticles(json) })
            .catch(error => console.error(error))
    }, [articles]);

    return (
        <article>
            <header>
                <h1>Importância da Tecnologia no Ambiente de Trabalho</h1>
                <p>Este é um parágrafo introdutório sobre o assunto de café e seus benefícios. Nele, podemos falar sobre a importância do tema e o que será abordado.</p>
            </header>

            {articles.map((article) => {
                return <Content title={`Seção ${article.id}: ${article.title}`} text={article.body} />
            })}

            <Section/>
        </article>
    )
}

export default Article;