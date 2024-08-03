# Node JS

**Node.js** é um ambiente de execução JavaScript, construído sobre o motor JavaScript V8 do Google Chrome. Ele é usado para desenvolver aplicações de rede escaláveis e rápidas. Node.js segue um modelo de I/O não bloqueante e orientado a eventos, o que o torna leve e eficiente, perfeito para aplicações de dados intensivos e em tempo real que são executadas em dispositivos distribuídos.

Node.js é usado para uma variedade de tarefas, como a construção de servidores web, criação de scripts do lado do servidor e para a criação de APIs. Além disso, o Node.js é usado em conjunto com várias outras tecnologias, como Express.js, AngularJS, e MongoDB, para criar aplicações web completas.

Em relação ao JavaScript, Node.js pode ser usado em conjunto com este para criar aplicações completas, pois permite que o JavaScript seja executado não apenas no navegador, mas também no servidor. Isso permite que os desenvolvedores usem o mesmo idioma tanto no front-end quanto no back-end, tornando o desenvolvimento mais consistente e eficiente.

Para saber mais sobre Node JS acesse: 

[https://youtu.be/GKR6uSvEj8w?feature=shared](https://youtu.be/GKR6uSvEj8w?feature=shared)

# Módulos

São pacotes de códigos que podem ser organizados em um ou mais arquivos e que possuem escopo próprio. Os módulos permitem o compartilhamento de código dentro da aplicação, esse código em questão pode ser nativo do Node, criado por nós ou até mesmo de terceiros. Existem três tipos de módulos no Node: internos, locais e de terceiros

- **Internos**
    
    Módulos internos são aqueles nativos do Node, ou seja, assim que o baixamos temos esses módulos disponíveis. Alguns deles são: **fs**, **http**, **url**, **script**, **querystring**, **util** e **os**.
    
- **Locais**
    
    Módulos locais são criados por nós durante o desenvolvimento de um projeto, dessa forma podemos reutilizar o código em diversos arquivos diferentes, bem como reutilizar em outro projeto.
    
- **Terceiros**
    
    Módulos de terceiros são pacotes criados e publicados pela comunidade e por via de regra são disponibilizados no site oficial de pacotes do Node, o [NPM](https://www.npmjs.com/).
    

# NPM

O *NPM* é o repositório oficial para a publicação de pacotes Node, logo ele funciona como um grande *"armazém"* para os pacotes, os disponibilizando para outras pessoas desenvolvedoras.

Já a ferramenta do NPM no Node auxilia no gerenciamento dos pacotes, sejam eles próprios ou de terceiros, dessa forma realizar a instalação e desinstalação, por exemplo, fica muito simples.

### Comandos

- **npm init**
    
    Inicia um pacote Node na pasta onde o comando foi executado, gerando um arquivo package.json com as informações do pacote.
    
- **npm run**
    
    Executa um script previamente definido no arquivo package.json.
    
- **npm start**
    
    Executa o script específico de start, *normalmente vinculado a inicialização do projeto*.
    
- **npm install**
    
    Instala as dependências especificadas previamente no arquivo package.json, ou alguma dependência definida por nós através da linha de comando.
    

<aside>
📌 O arquivo ".gitignore" serve para não incluir a pasta "node_modules" no *Git*, quando salvarmos nosso projeto. Essa pasta só deve existir localmente, porque, sempre que fazemos a instalação de um projeto, o *NPM* puxa os arquivos. Isso faz com que a pasta tenda a ficar muito grande. Por esta razão, não deverá subir essa pasta para o *Git*.

No código do arquivo ".gitignore", adicione `node_modules`. Caso esteja utilizando o sistema operacional *macOS* para desenvolver, adicione uma segunda linha com o arquivo `.DS_Store`, um arquivo oculto desse sistema que guarda atributos visuais das pastas e outras informações.

</aside>

# **O que são exatamente gerenciadores?**

Gerenciadores de pacotes são repositórios de código aberto nos quais devs disponibilizam soluções para o uso da comunidade. Estas soluções nada mais são do que programas que outras pessoas desenvolveram e que utilizamos para ganhar tempo no desenvolvimento de nosso próprio código, e vão desde *libs* (bibliotecas) pequenas e específicas até frameworks com vários recursos prontos. E um pacote é como chamamos o conjunto do código que determinada lib ou framework utiliza para executar.

Algumas dessas bibliotecas são criadas por times de desenvolvimento para resolver algum problema específico que tiveram que enfrentar. Depois elas são disponibilizadas para que outras pessoas com o mesmo contratempo aproveitem e também utilizem. Outras são disponibilizadas por empresas de software que utilizam as plataformas dos gerenciadores (o NPM e o YARN) para a distribuição de suas soluções de código. E sendo de código aberto, isso significa que você também pode criar e publicar a sua lib para outras pessoas baixarem e instalarem em seus projetos.

Sempre que trabalhamos com um projeto em Node.js do zero, uma das primeiras coisas que fazemos é criar um arquivo `package.json` utilizando o comando `npm init`; assim como para todas as instalações de libs externas utilizamos o comando `npm install <nome do pacote>`.

Ambos são **gerenciadores de pacotes**, sendo que NPM é acrônimo de ***Node Package Manager***, ou Gerenciador de Pacotes do Node.

# **Instalação local vs global**

Estes pacotes de código podem ser instalados **localmente**, estando disponíveis somente para o projeto no qual foi instalado através da pasta `node_modules`, e **globalmente**, sendo instalados em um diretório geral do NPM e ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.

Na maior parte das vezes, você vai utilizar a opção local, com os comandos `npm install <nome do pacote>`, pois fica mais fácil fazer o gerenciamento de versão das libs que utilizamos e muitas vezes, um pacote que instalamos “puxa” um ou vários outros pacotes auxiliares que ele precisa para funcionar. O ideal é não poluir o diretório global com libs que poderão ser utilizadas em somente um projeto.

Algumas libs e frameworks mais complexas vão solicitar que a instalação seja feita globalmente para funcionar. Sempre vale a pena consultar a documentação de cada uma. Para fazer uma instalação global de pacotes, utilizamos os comandos:

```
npm install -g <nome do pacote>
```

> A recomendação é que a instalação de pacotes seja feita sempre localmente (sem o -g) e que a instalação global só seja feita em casos específicos - normalmente a documentação da ferramenta vai informar se isso é necessário.
> 

# Promises

São objetos que representam o resultado eventual de uma operação assíncrona. Elas podem estar em um de três estados: pendente, resolvido ou rejeitado. Promises são usadas para lidar com operações assíncronas, como leitura de arquivos ou solicitações de rede, de maneira mais efetiva e legível. Uma Promise é criada usando o construtor `new Promise()`, que recebe uma função com dois parâmetros: `resolve` e `reject`, que são chamados quando a Promise é resolvida ou rejeitada, respectivamente.

## Async e Await

É uma extensão das Promises e proporciona uma maneira mais simples e elegante de usar Promises, tornando o código assíncrono mais fácil de escrever e ler. A palavra-chave `async` indica que uma função retorna uma Promise. Dentro dessa função, a palavra-chave `await` pode ser usada para esperar que uma Promise se resolva ou rejeite.

Para saber mais sobre *Promises* ou *Async e Await* acesse: [Promises](https://www.notion.so/Promises-1d5a2fa5b8fa48cbbdd27d3ccb2c741d?pvs=21)

# Expressões Regulares

Expressões regulares, também conhecidas como RegEx, são sequências de caracteres que formam um padrão de pesquisa. Elas são usadas principalmente para a busca de padrões em textos. O site [https://regex101.com/](https://regex101.com/) ajuda na prática sobre o uso do RegEx.

[Metacaracteres](https://www.notion.so/Metacaracteres-6b8b3b566afb4a658d3c93381fbb15c5?pvs=21)

# File System

O módulo `fs` (sistema de arquivos) é uma parte essencial do Node.js, permitindo a interação com o sistema de arquivos do sistema operacional. Com ele, é possível realizar uma variedade de operações, desde a leitura e escrita de arquivos até a manipulação de diretórios. Este módulo fornece métodos síncronos e assíncronos para lidar com operações de arquivo, permitindo que os desenvolvedores escolham o estilo de programação que melhor se adapta às suas necessidades.

Nesse caso, não é preciso usar o `npm install`, porque *FS* é uma biblioteca nativa do *Node.js*. Ela também existe em outras linguagens, mas sempre com a mesma funcionalidade: possibilitar a interação entre linguagens de programação e arquivos do computador. Para importá-la, use-se o método `import`.

```jsx

import fs from 'node:fs';
const enconding = 'utf-8'

// O primeiro parâmetro contém o underline para representar que não precisa usar
function callback(_, texto) {
	console.log(texto);
};

fs.readFile('./arquivos/texto.md', enconding, callback);
```

<aside>
📌 Enconding é uma forma de representar caracteres e símbolos em um formato compreensível para computadores. Os computadores operam em linguagem binária, composta por zeros e uns, mas os seres humanos se comunicam usando uma variedade de caracteres, números e símbolos. E são utilizados diferentes encodings, cada encoding possui um conjunto específico de regras para mapear caracteres para bytes, permitindo que os computadores compreendam e processem texto.

</aside>

[Métodos FS](https://www.notion.so/M-todos-FS-5d6f177331aa497db913b60addd623f5?pvs=21)

# Path

O módulo `Path` no Node.js é usado para lidar com manipulação e tranformção de caminhos de arquivo de forma segura e eficiente. Independentemente do sistema operacional, ele pode ser usado para tornar o código portável.

[Módulo Path](https://www.notion.so/M-dulo-Path-51d9da7c00f74cdc81b85a3f6cd0e6ed?pvs=21)

# Criando Servidor (http)

No **Node JS** há várias bibliotecas integradas e uma delas é o *http* que tem vários métodos de criação, alteração, atualização e remoção de dados usando métodos específico como **`get` **e uso de rotas para direcionar essas ações.

```jsx
import {createServer} from 'node:http';

const server = createServer((request, response) => { 
    return response.end('Servidor rodando!');
})

server.listen(8081);
```

O método `listen` cria a porta do endereço do servidor. Para saber mais sobre HTTP acesse: 

[Como funcionam os navegadores Web? #HipstersPontoTube](https://youtu.be/kDy62zaCHZE?feature=shared)

[Métodos HTTP](https://www.notion.so/M-todos-HTTP-75ec8e5fc7f3473fa20eab7634ba3fea?pvs=21)

# Express

Express é um framework para Node.js que fornece recursos fundamentais para a construção de aplicações web e APIs. Ele simplifica o processo de construção de aplicações web ao fornecer um conjunto robusto de recursos para lidar com rotas, solicitações HTTP e visualizações, entre outras coisas.

Instalar o Express é simples, você pode baixá-lo usando o NPM (*Node Package Manager*), que é o gerenciador de pacotes do Node.js. Para instalar o Express, você usaria o seguinte comando em seu terminal:

```
npm install express
```

Após a instalação, você pode importar e usar o Express em seu arquivo JavaScript da seguinte maneira:

```jsx
const express = require('express');

//Cria uma instância do express
const app = express();

//Define uma rota
app.get('/', function (req, res) {
  res.send('Olá Mundo!');
});

//Inicia o servidor na porta 3000
app.listen(3000, function () {
  console.log('Aplicação escutando na porta 3000!');
});

```

O Express é importante por sua eficiência e facilidade de uso. Ele simplifica a criação e o gerenciamento de rotas em sua aplicação, facilita a manipulação de solicitações HTTP e respostas, e ajuda na organização do seu código em um formato estruturado e fácil de entender.

[Rotas do Express](https://www.notion.so/Rotas-do-Express-04dfcca3a23d4289ba65fa0ccf8a706a?pvs=21)

## Status HTTP

**Cada número corresponde a um status.** Por exemplo, 200 indica que tudo ocorreu como esperado. Por outro lado, o 404 revela que algum recurso não foi encontrado. Fazendo uma analogia: é como se enviássemos uma carta para uma casa que não existe e o carteiro nos devolvesse a carta, dizendo "404 Casa Não Encontrada".

Os códigos de status de resposta HTTP indicam se uma solicitação *HTTP* específica foi concluída com êxito. As respostas são agrupadas em cinco classes:

- Respostas Informativas (`100` – `199`)
- Respostas bem-sucedidas (`200` – `299`)
- Mensagens de redirecionamento (`300` – `399`)
- Respostas de erro do cliente (`400` – `499`)
- Respostas de erro do servidor (`500` – `599`)

[Códigos de status de respostas HTTP - HTTP | MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#respostas_informativas)

[Error comuns do NodeJS](https://www.notion.so/Error-comuns-do-NodeJS-85281a53a1134e6aa37a69c15ce86310?pvs=21)

### Comandos do Terminal

- Comando mkdir ou *Make Directory* (Fazer Diretório) cria pastas específicas.
    
    ```
    C:\Users\Home\Desktop\JavaScript\Cadastro-JS> mkdir backend
    ```
    
- Comando type cria arquivos.
    
    ```
    C:\Users\Home\Desktop\JavaScript\Cadastro-JS\backend> type produtos.js
    ```
    
- O comando cd ou *Change Directory* (Mudar Diretório) navega até a pasta selecionada no terminal.
    
    ```
    // Acessando pasta
    C:\Users\Home\Desktop> cd JavaScript\Cadastro-JS\backend
    
    // Para voltar pasta
    C:\Users\Home\Desktop> cd ../../
    ```
    
- Depois de executar o comando, os arquivos do *Chalk serão puxados do repositório do NPM* para nosso terminal local. Logo, a pasta "node_modules" foi baixada. Dentro dela há a pasta "chalk", com os arquivos da biblioteca.
    
    ```
    npm install chalk@5.0.1 --save-exact
    ```
    
    Além disso, recebemos os arquivos `package-lock.json`, que controla as dependências e suas versões, e `package.json`, na parte de dependências, com a informação da versão do *Chalk* instalada.
    
- Saber o ping:
    
    ```
    ping github.com
    ```