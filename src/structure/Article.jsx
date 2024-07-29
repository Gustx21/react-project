import React, { useState, useEffect } from 'react';
import Content from '../../componets/Content';
import Section from './Section';
import Header from './Header';

function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/comments')
            .then(response => response.json())
            .then(json => { setArticles(json) })
            .catch(error => console.error(error))
    }, [articles]);

    const contents = articles.map((article) => {
        return <Content title={`Seção ${article.id}: ${article.title}`} text={article.body} />
    })

    return (
        <article id='Article'>
            <Header title={"As variações de linguagem de programação"} text={"Este é um parágrafo introdutório descreve sobre o assunto de variedades nas liguagem de programação e seus benefícios. Nele, podemos falar sobre a importância do tema e o que será abordado."} />

            {contents}

            <Section/>
        </article>
    )
}

export default Article;