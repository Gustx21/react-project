# React

React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, mantida pelo Facebook e uma comunidade de desenvolvedores individuais e empresas. Foi criada por Jordan Walke, um engenheiro de software do Facebook, e lançada em 2013. React permite a construção de aplicações web de forma eficiente e estruturada, utilizando uma abordagem baseada em componentes.

## Para que serve

React é utilizado para construir interfaces de usuário (UIs) dinâmicas e interativas. Suas principais vantagens incluem:

- **Componentização**: Facilita a reutilização de código através da criação de componentes.
- **Virtual DOM**: Melhora o desempenho da aplicação ao minimizar manipulações diretas do DOM.
- **Unidirectional Data Flow**: Garante uma arquitetura mais previsível e fácil de depurar.
- **Ecosistema Rico**: Integra-se bem com outras bibliotecas e frameworks.

## Como usar

### Instalação e configuração de um projeto React

Para começar a usar React, você pode utilizar o Create React App, uma ferramenta oficial que configura um novo projeto React com as melhores práticas e dependências necessárias:

```bash
npm create vite
cd my-app
npm start
```

### Palavras-chave

- **Componentes**: Blocos reutilizáveis de UI. Podem ser funções ou classes.
- **JSX**: Sintaxe que permite escrever HTML dentro do JavaScript.
- **Estado (State)**: Dados que mudam ao longo do tempo e afetam a renderização do componente.
- **Propriedades (Props)**: Dados passados para um componente para configurá-lo.
- **Ciclo de Vida dos Componentes**: Métodos que são chamados em diferentes fases da vida de um componente.
- **Hooks**: Funções que permitem usar estado e outras funcionalidades do React em componentes funcionais. Exemplos incluem `useState` e `useEffect`.

## Exemplos de código

### Criação de componentes

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;

```

### Uso de estado e props

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

```

### Exemplo de uso de hooks

```jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('<https://api.example.com/data>')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher;

```

Esses exemplos fornecem uma visão geral básica de como começar a usar React para construir interfaces de usuário. Para mais informações, consulte a documentação oficial do React.